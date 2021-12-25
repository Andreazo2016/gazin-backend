import { ILevelRepository } from "@/domain/level/repositories";
import {
  CreateLevelRequestDto,
  LevelResponseDto,
  UpdateLevelRequestDto,
} from "@/domain/level/dto";
import faker from "faker";

interface Level {
  id: number;
  level: string;
}
export class FakeLevelRepository implements ILevelRepository {
  private levels: Level[] = [];
  async create({ level }: CreateLevelRequestDto): Promise<LevelResponseDto> {
    const userCreated = {
      id: faker.datatype.number(),
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
  async findAll(): Promise<LevelResponseDto[]> {
    return this.levels;
  }
  async findById(id: number): Promise<LevelResponseDto | null> {
    return this.levels.find((user) => user.id === id);
  }

  async delete(id: number): Promise<void> {
    const userFoundIndex = this.levels.findIndex((user) => user.id === id);
    if (userFoundIndex) {
      this.levels.splice(0, userFoundIndex);
    }
  }
}
