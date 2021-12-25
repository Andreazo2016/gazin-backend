import { IRoute } from "@/application/interfaces/IRoutes";
import createDevelopController from "@/application/controllers/develop/create";
import listDevelopController from "@/application/controllers/develop/list";
import deleteDevelopController from "@/application/controllers/develop/delete";
import updateDevelopController from "@/application/controllers/develop/update";
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
  {
    method: Method.DELETE,
    path: "/develops/:id",
    description: "Delete a Develop",
    middlewares: [],
    controller: deleteDevelopController,
  },
  {
    method: Method.PUT,
    path: "/develops/:id",
    description: "Update a Develop",
    middlewares: [],
    controller: updateDevelopController,
  },
];

export default routes;
