import { Router, Response, Request } from "express";
const mainRouter: Router = Router();

mainRouter.get("/", (request: Request, response: Response) => {
  response.json({
      message: 'Hello World'
  });
});

export { mainRouter };