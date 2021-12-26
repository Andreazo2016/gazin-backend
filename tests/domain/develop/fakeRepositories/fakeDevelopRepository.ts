import faker from "faker";
import {
  CreateDevelopDto,
  DevelopResponseDto,
  UpdateDevelopRequestDto,
} from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";

interface Develop {
  id: number;
  levelId: number;
  name: string;
  sex: string;
  dateOfBirth: Date;
  age: number;
  hobby: string;
}
export class FakeDevelopRepository implements DevelopRepository {
  private develops: Develop[] = [];
  async create({
    name,
    sex,
    age,
    dateOfBirth,
    hobby,
    levelId,
  }: CreateDevelopDto): Promise<DevelopResponseDto> {
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
  async findAll(): Promise<DevelopResponseDto[]> {
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
  async findById(id: number): Promise<DevelopResponseDto> {
    return this.develops.find((develop) => develop.id === id);
  }
  async delete(id: number): Promise<void> {
    this.develops = this.develops.filter((develop) => develop.id !== id);
  }
}
