import { CreateLevelRequestDto, LevelResponseDto } from "@/domain/level/dto";
import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";

export class CreateLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute({ level }: CreateLevelRequestDto): Promise<LevelResponseDto> {
    return this.levelRepository.create({ level });
  }
}
