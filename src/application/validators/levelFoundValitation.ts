import { IValidation } from "@/application/interfaces/IValidation";
import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";
import { LevelNotFound } from "@/application/errors";

export class LevelFoundValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly levelRepository: ILevelRepository
  ) {}

  async validate(input: any): Promise<Error> {
    const id = input[this.fieldName];
    const level = await this.levelRepository.findById(id);
    if (!level) {
      return new LevelNotFound();
    }
  }
}
