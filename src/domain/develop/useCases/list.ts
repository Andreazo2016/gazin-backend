import { DevelopRepository } from "@/domain/develop/repositories";
import { DevelopResponseDto } from "@/domain/develop/dto";

export class ListDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(): Promise<DevelopResponseDto[]> {
    return this.developRepository.findAll();
  }
}
