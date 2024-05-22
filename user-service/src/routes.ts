import { Router } from 'express';
import userRouter from './controllers/UserController';
import { licenseCheck } from './middleware/licenseCheck';

const routes = Router();

routes.use(licenseCheck);
routes.use('/users', userRouter);

export default routes;