import { IValidation } from "@/application/interfaces/IValidation";
import { DevelopRepository } from "@/domain/develop/repositories/IDevelopRepository";
import { ErrorDeleteLevel } from "@/application/errors";
import { IErrorApp } from "@/application/interfaces";

export class DeleteLevelWithDevelopValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly developRepository: DevelopRepository
  ) {}

  async validate(input: any): Promise<IErrorApp> {
    const levelId = input[this.fieldName];
    const develops = await this.developRepository.findDevelopsByLevelId(
      levelId
    );
    if (develops && develops.length > 0) {
      return new ErrorDeleteLevel();
    }
  }
}
