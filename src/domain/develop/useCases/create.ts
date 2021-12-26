import { DevelopResponseDto, CreateDevelopDto } from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";

export class CreateDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(develop: CreateDevelopDto): Promise<DevelopResponseDto> {
    return this.developRepository.create(develop);
  }
}
