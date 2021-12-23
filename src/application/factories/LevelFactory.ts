import { CreateLevel, ListLevel } from "@/domain/level/useCases";
import { LevelRepositoryFactory } from "./LevelRepositoryFactory";

export class LevelFactory {
  static createLevel(): CreateLevel {
    return new CreateLevel(LevelRepositoryFactory.getInstance());
  }

  static listLevel(): ListLevel {
    return new ListLevel(LevelRepositoryFactory.getInstance());
  }
}
