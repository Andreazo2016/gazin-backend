import { UpdateLevelRequestDto, LevelResponseDto } from "@/domain/level/dto";
import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";

export class UpdateLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute({ id, level }: UpdateLevelRequestDto): Promise<void> {
    await this.levelRepository.update({ id, level });
  }
}
