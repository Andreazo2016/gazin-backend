import { HttpResponse } from "@/application/interfaces/HttpResponse";
import { ServerError } from "../errors";
import { IErrorApp } from "@/application/interfaces/IErrorApp";

export const badRequest = (error: IErrorApp): HttpResponse => ({
  statusCode: error.statusCode || 400,
  body: error,
});

export const serverError = (error: IErrorApp): HttpResponse => ({
  statusCode: error.statusCode || 500,
  body: new ServerError(error.stack),
});

export const ok = (data?: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
export const created = (): HttpResponse => ({
  statusCode: 201,
  body: {},
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: {},
});
