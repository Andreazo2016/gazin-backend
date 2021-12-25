import { CreateDevelopDto, DevelopResponseDto } from "@/domain/develop/dto";

export interface DevelopRepository {
  create(level: CreateDevelopDto): Promise<DevelopResponseDto>;
  findAll(): Promise<DevelopResponseDto[]>;
}
