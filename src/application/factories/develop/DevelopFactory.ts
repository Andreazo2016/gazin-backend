import {
  CreateDevelop,
  ListDevelop,
  DeleteDevelop,
  UpdateDevelop,
} from "@/domain/develop/useCases";
import { DevelopRepositoryFactory } from "./DevelopRepositoryFactory";

export class DevelopFactory {
  static createDevelop(): CreateDevelop {
    return new CreateDevelop(DevelopRepositoryFactory.getInstance());
  }
  static listDevelop(): ListDevelop {
    return new ListDevelop(DevelopRepositoryFactory.getInstance());
  }
  static deleteDevelop(): DeleteDevelop {
    return new DeleteDevelop(DevelopRepositoryFactory.getInstance());
  }
  static updateDevelop(): UpdateDevelop {
    return new UpdateDevelop(DevelopRepositoryFactory.getInstance());
  }
}
