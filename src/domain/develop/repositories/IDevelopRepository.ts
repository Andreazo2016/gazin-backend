import {
  CreateDevelopDto,
  UpdateDevelopRequestDto,
} from "@/domain/develop/dto";

import { Develop } from "../model/develop";

export interface DevelopRepository {
  create(develop: CreateDevelopDto): Promise<Develop>;
  findAll(): Promise<Develop[]>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Develop>;
  update(develop: UpdateDevelopRequestDto): Promise<void>;
  findDevelopsByLevelId(id: number): Promise<Develop[]>;
}
