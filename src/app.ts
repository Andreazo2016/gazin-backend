import routerLoader from "./loaders/router";
import homeRoutes from "./application/routes/home.routes";
import levelRoutes from "./application/routes/level.routes";
import developRoutes from "./application/routes/develop.routes";

const routes = [...homeRoutes, ...levelRoutes, ...developRoutes];
const app = routerLoader([routes]);

export default app;
