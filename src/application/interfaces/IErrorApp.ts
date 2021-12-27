export abstract class IErrorApp extends Error {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string, name: string, statusCode?: number) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}
