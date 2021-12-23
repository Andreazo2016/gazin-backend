import { IRoute } from "@/application/interfaces/IRoutes";
import helloController from "@/application/controllers/home/hello";
import { Method } from "@/common/enums/http-methods";

const routes: IRoute[] = [
  {
    method: Method.GET,
    path: "/",
    description: "Hello controller",
    middlewares: [],
    controller: helloController,
  },
];

export default routes;
