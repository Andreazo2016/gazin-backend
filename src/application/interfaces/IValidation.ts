export interface IValidation {
  validate: (input: any) => Promise<Error>;
}
