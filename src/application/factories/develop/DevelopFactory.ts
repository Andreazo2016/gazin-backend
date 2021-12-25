import { CreateDevelop, ListDevelop } from "@/domain/develop/useCases";
import { DevelopRepositoryFactory } from "./DevelopRepositoryFactory";

export class DevelopFactory {
  static createDevelop(): CreateDevelop {
    return new CreateDevelop(DevelopRepositoryFactory.getInstance());
  }
  static listDevelop(): ListDevelop {
    return new ListDevelop(DevelopRepositoryFactory.getInstance());
  }
}
