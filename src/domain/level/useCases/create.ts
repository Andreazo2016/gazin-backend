import { CreateLevelRequestDto } from "@/domain/level/dto";
import { ILevelRepository } from "@/domain/level/repositories/ILevelRepository";
import { Level } from "@/domain/level/model/level";

export class CreateLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute({ level }: CreateLevelRequestDto): Promise<Level> {
    return this.levelRepository.create({ level });
  }
}
