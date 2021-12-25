import { ILevelRepository } from "@/domain/level/repositories";
import { LevelRepositoryPrisma } from "@/infra/database/prisma/level/repositories/LevelRepositoryPrisma";
export class LevelRepositoryFactory {
  static levelRepository: ILevelRepository = null;
  static getInstance(): ILevelRepository {
    if (!LevelRepositoryFactory.levelRepository) {
      LevelRepositoryFactory.levelRepository = new LevelRepositoryPrisma();
      return LevelRepositoryFactory.levelRepository;
    }
    return LevelRepositoryFactory.levelRepository;
  }
}
