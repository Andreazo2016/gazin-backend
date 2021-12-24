import {
  RequiredFieldValidation,
  LevelFoundValidation,
} from "@/application/validators";
import { IValidation } from "@/application/interfaces";
import { ValidationComposite } from "@/application/validators";
import { LevelRepositoryFactory } from "./LevelRepositoryFactory";

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
}
