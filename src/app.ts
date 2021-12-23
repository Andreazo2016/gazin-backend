import routerLoader from "./loaders/router";
import homeRoutes from "./application/routes/home.routes";

const routes = [...homeRoutes];
const app = routerLoader([routes]);

export default app;
