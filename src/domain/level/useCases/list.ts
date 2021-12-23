import { ILevelRepository } from "@/domain/level/repositories/";
import { LevelResponseDto } from "@/domain/level/dto";

export class ListLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute(): Promise<LevelResponseDto[]> {
    return this.levelRepository.findAll();
  }
}
