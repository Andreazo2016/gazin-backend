import routerLoader from "./loaders/router";
import homeRoutes from "./application/routes/home.routes";
import levelRoutes from "./application/routes/level.routes";

const routes = [...homeRoutes, ...levelRoutes];
const app = routerLoader([routes]);

export default app;
