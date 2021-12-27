import { IValidation } from "@/application/interfaces";
import { MissingParamError } from "@/application/errors";
import { IErrorApp } from "@/application/interfaces";

export class RequiredFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  async validate(input: any): Promise<IErrorApp> {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
