import {
  CreateLevelRequestDto,
  UpdateLevelRequestDto,
  LevelResponseDto,
} from "@/domain/level/dto";
import { ILevelRepository } from "@/domain/level/repositories/";
import { PrismaClient } from "@prisma/client";

export class LevelRepositoryPrisma implements ILevelRepository {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async create({ level }: CreateLevelRequestDto): Promise<LevelResponseDto> {
    return this.prismaClient.levels.create({
      data: {
        level,
      },
    });
  }

  findById(id: number): Promise<LevelResponseDto> {
    return this.prismaClient.levels.findUnique({
      where: {
        id,
      },
    });
  }

  update({ id, level }: UpdateLevelRequestDto): Promise<void> {
    return this.prismaClient.levels.update({
      where: {
        id,
      },
      data: {
        level,
      },
    });
  }

  findAll(): Promise<LevelResponseDto[]> {
    return this.prismaClient.levels.findMany();
  }
  delete(id: number): Promise<void> {
    return this.prismaClient.levels.delete({
      where: {
        id,
      },
    });
  }
}
