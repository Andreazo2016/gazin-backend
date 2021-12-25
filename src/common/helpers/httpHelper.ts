import { HttpResponse } from "@/application/interfaces/HttpResponse";
import { ServerError } from "../errors";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
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
