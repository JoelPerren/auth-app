import express, { Router } from 'express';
import passport from 'passport'
import {
    createUser
} from './authController.js';

const authRouter = express.Router();

// authRouter.get('/authenticate', passport.authenticate('jwt', { session: false }));
authRouter.post('/login');
authRouter.delete('/logout');
authRouter.delete('/force_logout');
authRouter.put('/refresh_jwt');

export { authRouter };