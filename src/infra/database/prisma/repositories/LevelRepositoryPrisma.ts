import { CreateLevelRequestDto, LevelResponseDto } from "@/domain/level/dto";
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

  findAll(): Promise<LevelResponseDto[]> {
    return this.prismaClient.levels.findMany();
  }
}
