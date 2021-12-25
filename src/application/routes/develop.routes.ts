import { IRoute } from "@/application/interfaces/IRoutes";
import createDevelopController from "@/application/controllers/develop/create";
import listDevelopController from "@/application/controllers/develop/list";
import { Method } from "@/common/enums/http-methods";

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: "/develops",
    description: "Create one Develop",
    middlewares: [],
    controller: createDevelopController,
  },
  {
    method: Method.GET,
    path: "/develops",
    description: "List all Develops",
    middlewares: [],
    controller: listDevelopController,
  },
];

export default routes;
