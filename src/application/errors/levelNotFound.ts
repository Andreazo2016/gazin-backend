export class LevelNotFound extends Error {
  constructor() {
    super("Level not found");
    this.name = "LevelNotFoundError";
  }
}
