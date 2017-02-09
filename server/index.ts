import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import { DatabaseModule } from './mongo';
import { mainRouter } from './routes/main';

DatabaseModule.MongoDB.Init('');
const app: express.Application = express();
app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

app.use('/api', mainRouter);

app.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    let error = new Error('Not found');
    next(error);
});

app.use((error: any, request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.status(error.status || 500);
    response.json({
        error: {},
        message: error.message
    });
});

export { app };