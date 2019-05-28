import users from '../users/index';
import posts from '../posts/index';

import { Router } from 'express';

const indexRouter = Router();

indexRouter.use(users.routers);
indexRouter.use(posts.routers);

export default indexRouter;