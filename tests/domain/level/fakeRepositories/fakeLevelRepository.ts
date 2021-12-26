import faker from "faker";
import { ILevelRepository } from "@/domain/level/repositories";
import {
  CreateLevelRequestDto,
  UpdateLevelRequestDto,
} from "@/domain/level/dto";
import { Level } from "@/domain/level/model/level";

export class FakeLevelRepository implements ILevelRepository {
  private levels: Level[] = [];
  async create({ level }: CreateLevelRequestDto): Promise<Level> {
    const userCreated = {
      id: faker.datatype.number(100),
      level,
    };
    this.levels.push(userCreated);
    return userCreated;
  }

  async update({ id, level }: UpdateLevelRequestDto): Promise<void> {
    const levelData = await this.findById(id);
    if (levelData) {
      levelData.level = level;
      await this.delete(id);
      this.levels.push(levelData);
    }
  }
  async findAll(): Promise<Level[]> {
    return this.levels;
  }
  async findById(id: number): Promise<Level | null> {
    return this.levels.find((level) => level.id === id);
  }

  async delete(id: number): Promise<void> {
    this.levels = this.levels.filter((level) => level.id !== id);
  }
}
