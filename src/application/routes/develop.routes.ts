import { IRoute } from "@/application/interfaces/IRoutes";
import createDevelopController from "@/application/controllers/develop/create";
import { Method } from "@/common/enums/http-methods";

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: "/develops",
    description: "Create one Develop",
    middlewares: [],
    controller: createDevelopController,
  },
];

export default routes;
