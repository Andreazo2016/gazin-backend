import { IErrorApp } from "@/application/interfaces";
export class DevelopNotFound extends IErrorApp {
  constructor() {
    super("Develop not found", "DevelopNotFoundError", 404);
  }
}
