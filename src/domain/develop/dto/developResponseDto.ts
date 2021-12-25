import { LevelDto } from "./levelDto";
export interface DevelopResponseDto {
  id: number;
  levelId: number;
  name: string;
  sex: string;
  dateOfBirth: Date;
  age: number;
  hobby: string;
  level: LevelDto;
}
