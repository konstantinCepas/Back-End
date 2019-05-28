import { Router } from 'express';
import posts from './actions';

const postRouter = Router();

postRouter.get('/posts', posts.list);
postRouter.put('/posts/:id', posts.update);
postRouter.delete('/posts/:id', posts.del);
postRouter.post('/posts', posts.create);
postRouter.get('/posts/:id', posts.get);

export default postRouter;