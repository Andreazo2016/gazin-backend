import {
  RequiredFieldValidation,
  LevelFoundValidation,
} from "@/application/validators";
import { IValidation } from "@/application/interfaces";
import { ValidationComposite } from "@/application/validators";
import { LevelRepositoryFactory } from "../level/LevelRepositoryFactory";

export class ValidationFactory {
  static createDevelopValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new RequiredFieldValidation("name"));
    validations.push(new RequiredFieldValidation("sex"));
    validations.push(new RequiredFieldValidation("dateOfBirth"));
    validations.push(new RequiredFieldValidation("age"));
    validations.push(new RequiredFieldValidation("hobby"));
    validations.push(new RequiredFieldValidation("levelId"));
    validations.push(
      new LevelFoundValidation("levelId", LevelRepositoryFactory.getInstance())
    );

    return new ValidationComposite(validations);
  };
}
