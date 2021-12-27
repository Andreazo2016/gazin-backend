import { IErrorApp } from "@/application/interfaces";

export interface IValidation {
  validate: (input: any) => Promise<IErrorApp>;
}
