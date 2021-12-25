enum SEX {
  FEMALE = "F",
  MALE = "M",
}
export interface UpdateDevelopRequestDto {
  id: number;
  name: string;
  sex: SEX;
  dateOfBirth: Date;
  age: number;
  hobby: string;
}
