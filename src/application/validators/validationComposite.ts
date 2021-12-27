import { IValidation } from "@/application/interfaces/IValidation";
import { IErrorApp } from "@/application/interfaces";

export class ValidationComposite implements IValidation {
  constructor(private readonly validations: IValidation[]) {}

  async validate(input: any): Promise<IErrorApp> {
    for (const validation of this.validations) {
      const error = await validation.validate(input);
      if (error) {
        return error;
      }
    }
  }
}
