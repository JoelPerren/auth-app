import express from 'express';
import { createUser } from './userController.js';

const userRouter = express.Router();

userRouter.post('', createUser);

export { userRouter };