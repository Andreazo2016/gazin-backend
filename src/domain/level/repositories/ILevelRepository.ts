import {
  CreateLevelRequestDto,
  UpdateLevelRequestDto,
  LevelResponseDto,
} from "@/domain/level/dto";

export interface ILevelRepository {
  create(level: CreateLevelRequestDto): Promise<LevelResponseDto>;
  update(level: UpdateLevelRequestDto): Promise<LevelResponseDto>;
  findAll(): Promise<LevelResponseDto[]>;
  findById(id: number): Promise<LevelResponseDto>;
}
