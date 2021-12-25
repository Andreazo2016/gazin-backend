import {
  RequiredFieldValidation,
  DevelopFoundValidation,
  LevelFoundValidation,
} from "@/application/validators";
import { IValidation } from "@/application/interfaces";
import { ValidationComposite } from "@/application/validators";
import { LevelRepositoryFactory } from "../level/LevelRepositoryFactory";
import { DevelopRepositoryFactory } from "../develop/DevelopRepositoryFactory";

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

  static deleteDevelopValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(
      new DevelopFoundValidation("id", DevelopRepositoryFactory.getInstance())
    );

    return new ValidationComposite(validations);
  };

  static updateDevelopValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(
      new DevelopFoundValidation("id", DevelopRepositoryFactory.getInstance())
    );

    return new ValidationComposite(validations);
  };
}
