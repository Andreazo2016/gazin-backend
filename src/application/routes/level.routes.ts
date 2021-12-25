import { IRoute } from "@/application/interfaces/IRoutes";
import createLevelController from "@/application/controllers/level/create";
import listLevelController from "@/application/controllers/level/list";
import updateLevelController from "@/application/controllers/level/update";
import deleteLevelController from "@/application/controllers/level/delete";
import { Method } from "@/common/enums/http-methods";

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: "/levels",
    description: "Create one level",
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
  {
    method: Method.DELETE,
    path: "/levels/:id",
    description: "Delete one level",
    middlewares: [],
    controller: deleteLevelController,
  },
];

export default routes;
