import { IErrorApp } from "@/application/interfaces";

export class MissingParamError extends IErrorApp {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`, "MissingParamError", 400);
  }
}
