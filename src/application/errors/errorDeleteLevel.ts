import { IErrorApp } from "@/application/interfaces";

export class ErrorDeleteLevel extends IErrorApp {
  constructor() {
    super(
      "Can not delete this level. It is associate with develops",
      "ErrorDeleteLevel",
      501
    );
  }
}
