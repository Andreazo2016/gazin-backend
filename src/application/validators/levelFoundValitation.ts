import { IValidation } from "@/application/interfaces/IValidation";
import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";
import { LevelNotFound } from "@/application/errors";
import { IErrorApp } from "@/application/interfaces";

export class LevelFoundValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly levelRepository: ILevelRepository
  ) {}

  async validate(input: any): Promise<IErrorApp> {
    const id = input[this.fieldName];
    const level = await this.levelRepository.findById(id);
    if (!level) {
      return new LevelNotFound();
    }
  }
}
