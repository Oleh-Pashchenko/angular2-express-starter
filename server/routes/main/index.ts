import { Router, Response, Request } from 'express';
import { Task } from '../../mongo/models/task-model';
const mainRouter: Router = Router();

mainRouter.get('/', (request: Request, response: Response) => {
  /* Task.getTask('589cc69f94b38c0c2e57af82')
     .then(task => {
       response.json({
         message: task.title
       });
     })
     .catch(error => {
       response.status(404)
         .json({
           error: error
         });
     }); */

  response.json({
    message: 'Hello World'
  });
});

export { mainRouter };
