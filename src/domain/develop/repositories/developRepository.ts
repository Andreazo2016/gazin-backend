import {
  CreateDevelopDto,
  DevelopResponseDto,
  UpdateDevelopRequestDto,
} from "@/domain/develop/dto";

export interface DevelopRepository {
  create(develop: CreateDevelopDto): Promise<DevelopResponseDto>;
  findAll(): Promise<DevelopResponseDto[]>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<DevelopResponseDto>;
  update(develop: UpdateDevelopRequestDto): Promise<void>;
}
