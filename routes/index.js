import authRouter from "./auth.route.js";

function route(app) {
  app.use("/auth", authRouter);
}

export default route;
