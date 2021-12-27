import faker from "faker";
import {
  CreateDevelopDto,
  UpdateDevelopRequestDto,
} from "@/domain/develop/dto";

import { Develop } from "@/domain/develop/model/develop";

import { DevelopRepository } from "@/domain/develop/repositories/IDevelopRepository";

export class FakeDevelopRepository implements DevelopRepository {
  private develops: Develop[] = [];
  async create({
    name,
    sex,
    age,
    dateOfBirth,
    hobby,
    levelId,
  }: CreateDevelopDto): Promise<Develop> {
    const develop = {
      id: faker.datatype.number(100),
      name,
      sex,
      age,
      dateOfBirth,
      hobby,
      levelId,
    };
    this.develops.push(develop);
    return develop;
  }
  async findAll(): Promise<Develop[]> {
    return this.develops;
  }
  async update({ id, ...params }: UpdateDevelopRequestDto): Promise<void> {
    const develop = await this.findById(id);
    if (develop) {
      await this.delete(id);
      const newDevelop = { ...develop, ...params };
      this.develops.push(newDevelop);
    }
  }
  async findById(id: number): Promise<Develop> {
    return this.develops.find((develop) => develop.id === id);
  }
  async delete(id: number): Promise<void> {
    this.develops = this.develops.filter((develop) => develop.id !== id);
  }
  async findDevelopsByLevelId(id: number): Promise<Develop[]> {
    return this.develops.filter((develop) => develop.levelId === id);
  }
}
