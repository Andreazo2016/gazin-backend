import { DevelopRepository } from "@/domain/develop/repositories";
import { DevelopRepositoryPrisma } from "@/infra/database/prisma/develop/repositories/developRepositoryPrisma";
export class DevelopRepositoryFactory {
  static developRepository: DevelopRepository = null;
  static getInstance(): DevelopRepository {
    if (!DevelopRepositoryFactory.developRepository) {
      DevelopRepositoryFactory.developRepository =
        new DevelopRepositoryPrisma();
      return DevelopRepositoryFactory.developRepository;
    }
    return DevelopRepositoryFactory.developRepository;
  }
}
