import { CreateDevelop } from "@/domain/develop/useCases";
import { DevelopRepositoryFactory } from "./DevelopRepositoryFactory";

export class DevelopFactory {
  static createDevelop(): CreateDevelop {
    return new CreateDevelop(DevelopRepositoryFactory.getInstance());
  }
}
