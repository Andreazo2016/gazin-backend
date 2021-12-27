import {
  CreateDevelopDto,
  UpdateDevelopRequestDto,
} from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/IDevelopRepository";
import { PrismaClient } from "@prisma/client";
import { Develop } from "@/domain/develop/model/develop";
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
  }: CreateDevelopDto): Promise<Develop> {
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
  findAll(): Promise<Develop[]> {
    return this.prismaClient.develops.findMany({
      include: {
        nivel: true,
      },
    });
  }
  update({ id, ...params }: UpdateDevelopRequestDto): Promise<void> {
    return this.prismaClient.develops.update({
      where: {
        id,
      },
      data: {
        ...params,
      },
    });
  }
  findById(id: number): Promise<Develop> {
    return this.prismaClient.develops.findUnique({
      where: {
        id,
      },
    });
  }
  delete(id: number): Promise<void> {
    return this.prismaClient.develops.delete({
      where: {
        id,
      },
    });
  }
  findDevelopsByLevelId(id: number): Promise<Develop[]> {
    return this.prismaClient.develops.findMany({
      where: {
        levelId: id,
      },
    });
  }
}
