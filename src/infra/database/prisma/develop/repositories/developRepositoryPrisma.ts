import { CreateDevelopDto, DevelopResponseDto } from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";
import { PrismaClient } from "@prisma/client";

export class DevelopRepositoryPrisma implements DevelopRepository {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async create({
    name,
    sex,
    age,
    dateOfBirth,
    hobby,
    levelId,
  }: CreateDevelopDto): Promise<DevelopResponseDto> {
    return this.prismaClient.develops.create({
      data: {
        name,
        sex,
        age,
        dateOfBirth,
        hobby,
        levelId,
      },
    });
  }
}
