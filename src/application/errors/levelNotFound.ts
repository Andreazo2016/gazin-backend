import { IErrorApp } from "@/application/interfaces";
export class LevelNotFound extends IErrorApp {
  constructor() {
    super("Level not found", "LevelNotFoundError", 404);
  }
}
