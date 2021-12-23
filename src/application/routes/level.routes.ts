import { IRoute } from "@/application/interfaces/IRoutes";
import createLevelController from "@/application/controllers/level/create";
import listLevelController from "@/application/controllers/level/list";
import { Method } from "@/common/enums/http-methods";

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: "/levels",
    description: "Create level",
    middlewares: [],
    controller: createLevelController,
  },
  {
    method: Method.GET,
    path: "/levels",
    description: "List all level",
    middlewares: [],
    controller: listLevelController,
  },
];

export default routes;
