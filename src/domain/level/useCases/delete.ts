import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";

export class DeleteLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute(id: number): Promise<void> {
    await this.levelRepository.delete(id);
  }
}
