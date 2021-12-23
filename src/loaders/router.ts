import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { IRoute } from "@/application/interfaces/IRoutes";
import { adaptRoute } from "@/infra/adapters/express-router";

export default (routes: [IRoute[]]) => {
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use(morgan("dev"));
  const allRoutes = routes.flat();
  allRoutes.forEach((route) => {
    const middlewares = route.middlewares || [];
    app[route.method.toLocaleLowerCase()](
      route.path,
      middlewares,
      adaptRoute(route.controller)
    );
  });

  return app;
};
