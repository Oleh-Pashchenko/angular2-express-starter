import { Router, Response, Request } from 'express';
import { Task } from '../../mongo/models/task-model';
const mainRouter: Router = Router();

mainRouter.get('/', (request: Request, response: Response) => {
  response.json({
      message: 'Hello World'
  });
});

export { mainRouter };
