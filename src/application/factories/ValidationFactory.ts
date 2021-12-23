import { RequiredFieldValidation } from "@/application/validators";
import { IValidation } from "@/application/interfaces";
import { ValidationComposite } from "@/application/validators";

export class ValidationFactory {
  static createLevelValidation = (): ValidationComposite => {
    const validations: IValidation[] = [];
    validations.push(new RequiredFieldValidation("level"));

    return new ValidationComposite(validations);
  };
}
