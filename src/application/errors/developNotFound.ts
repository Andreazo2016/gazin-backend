export class DevelopNotFound extends Error {
  constructor() {
    super("Develop not found");
    this.name = "DevelopNotFoundError";
  }
}
