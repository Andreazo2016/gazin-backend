import { ILevelRepository } from "@/domain/level/repositories/";
import { Level } from "@/domain/level/model/level";

export class ListLevel {
  constructor(private levelRepository: ILevelRepository) {}
  async execute(): Promise<Level[]> {
    return this.levelRepository.findAll();
  }
}
