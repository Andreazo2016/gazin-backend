import { CreateLevelRequestDto, LevelResponseDto } from "@/domain/level/dto";

export interface ILevelRepository {
  create(level: CreateLevelRequestDto): Promise<LevelResponseDto>;
  findAll(): Promise<LevelResponseDto[]>;
}
