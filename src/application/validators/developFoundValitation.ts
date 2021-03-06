import { IValidation } from "@/application/interfaces/IValidation";
import { DevelopRepository } from "@/domain/develop/repositories/IDevelopRepository";
import { DevelopNotFound } from "@/application/errors";
import { IErrorApp } from "@/application/interfaces";

export class DevelopFoundValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly developRepository: DevelopRepository
  ) {}

  async validate(input: any): Promise<IErrorApp> {
    const id = input[this.fieldName];
    const level = await this.developRepository.findById(id);
    if (!level) {
      return new DevelopNotFound();
    }
  }
}
