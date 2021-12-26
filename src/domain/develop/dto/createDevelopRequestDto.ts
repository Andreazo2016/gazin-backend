enum SEX {
  FEMALE = "F",
  MALE = "M",
}
export interface CreateDevelopRequestDto {
  levelId: number;
  name: string;
  sex: SEX;
  dateOfBirth: Date;
  age: number;
  hobby: string;
}
