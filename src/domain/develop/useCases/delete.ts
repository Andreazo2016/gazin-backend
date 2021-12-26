import { DevelopRepository } from "@/domain/develop/repositories";

export class DeleteDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(id: number): Promise<void> {
    await this.developRepository.delete(id);
  }
}
