import { UpdateDevelopRequestDto } from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";

export class UpdateDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(develop: UpdateDevelopRequestDto): Promise<void> {
    await this.developRepository.update(develop);
  }
}
