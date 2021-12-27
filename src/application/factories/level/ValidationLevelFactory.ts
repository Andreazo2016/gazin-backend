import {
  RequiredFieldValidation,
  LevelFoundValidation,
  DeleteLevelWithDevelopValidation,
} from "@/application/validators";
import { IValidation } from "@/application/interfaces";
import { ValidationComposite } from "@/application/validators";
import { LevelRepositoryFactory } from "./LevelRepositoryFactory";
import { DevelopRepositoryFactory } from "@/application/factories/develop/DevelopRepositoryFactory";

export class ValidationFactory {
  static createLevelValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new RequiredFieldValidation("level"));

    return new ValidationComposite(validations);
  };

  static updateLevelValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new RequiredFieldValidation("level"));
    validations.push(
      new LevelFoundValidation("id", LevelRepositoryFactory.getInstance())
    );
    return new ValidationComposite(validations);
  };

  static deleteLevelValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(
      new LevelFoundValidation("id", LevelRepositoryFactory.getInstance())
    );
    validations.push(
      new DeleteLevelWithDevelopValidation(
        "levelId",
        DevelopRepositoryFactory.getInstance()
      )
    );
    return new ValidationComposite(validations);
  };
}
