import { IValidation } from "@/application/interfaces/IValidation";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";
import { DevelopNotFound } from "@/application/errors";

export class DevelopFoundValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly developRepository: DevelopRepository
  ) {}

  async validate(input: any): Promise<Error> {
    const id = input[this.fieldName];
    const level = await this.developRepository.findById(id);
    if (!level) {
      return new DevelopNotFound();
    }
  }
}
