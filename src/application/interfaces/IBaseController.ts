import { HttpResponse } from "./HttpResponse";

export interface IBaseController {
  execute(request: any): Promise<HttpResponse>;
}
