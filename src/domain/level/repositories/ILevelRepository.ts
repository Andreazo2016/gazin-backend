import {
  CreateLevelRequestDto,
  UpdateLevelRequestDto,
} from "@/domain/level/dto";

import { Level } from "@/domain/level/model/level";

export interface ILevelRepository {
  create(level: CreateLevelRequestDto): Promise<Level>;
  update(level: UpdateLevelRequestDto): Promise<void>;
  findAll(): Promise<Level[]>;
  findById(id: number): Promise<Level | null>;
  delete(id: number): Promise<void>;
}
