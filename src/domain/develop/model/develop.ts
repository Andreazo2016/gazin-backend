import { Level } from "@/domain/level/model/level";
export interface Develop {
  id: number;
  levelId: number;
  name: string;
  sex: string;
  dateOfBirth: Date;
  age: number;
  hobby: string;
  level?: Level;
}
