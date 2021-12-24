import { IRoute } from "@/application/interfaces/IRoutes";
import createLevelController from "@/application/controllers/level/create";
import listLevelController from "@/application/controllers/level/list";
import updateLevelController from "@/application/controllers/level/update";
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
  {
    method: Method.PUT,
    path: "/levels/:id",
    description: "update one level",
    middlewares: [],
    controller: updateLevelController,
  },
];

export default routes;
