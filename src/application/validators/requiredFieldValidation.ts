import { IValidation } from "@/application/interfaces";
import { MissingParamError } from "@/application/errors";

export class RequiredFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  async validate(input: any): Promise<Error> {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
