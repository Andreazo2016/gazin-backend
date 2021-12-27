import {
  ValidationComposite,
  RequiredFieldValidation,
  LevelFoundValidation,
  DeleteLevelWithDevelopValidation,
} from "@/application/validators";
import { IValidation } from "@/application/interfaces/IValidation";
import { ILevelRepository } from "@/domain/level/repositories";
import { DevelopRepository } from "@/domain/develop/repositories/IDevelopRepository";

export class ValidationFactory {
  static requiredValidation = (
    requiredFieldName: string
  ): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new RequiredFieldValidation(requiredFieldName));
    return new ValidationComposite(validations);
  };

  static levelFoundValidation = (
    levelRepository: ILevelRepository
  ): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new LevelFoundValidation("id", levelRepository));
    return new ValidationComposite(validations);
  };

  static deleteLevelWithDevelopValidation = (
    developRepository: DevelopRepository
  ): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(
      new DeleteLevelWithDevelopValidation("id", developRepository)
    );
    return new ValidationComposite(validations);
  };
}
