import { IBaseController } from "./IBaseController";
import { IMiddleware } from "./IMiddleware";
import { Method } from "@/common/enums/http-methods";

export interface IRoute {
  method: Method;
  controller: IBaseController;
  path: String;
  description?: String;
  middlewares?: IMiddleware[];
}
