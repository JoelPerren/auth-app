import express from 'express';
import passport from 'passport'
import {
    findUserDetails,
    assignRefreshTokenToUser,
    removeRefreshTokenFromUser,
    removeAllRefreshTokensFromUser,
    updateRefreshTokenForUser
} from './authController.js';

const authRouter = express.Router();

authRouter.get('/login', findUserDetails, assignRefreshTokenToUser);
authRouter.put('/jwt', passport.authenticate('jwt', {session: false}))
authRouter.delete('/logout', removeRefreshTokenFromUser);
authRouter.delete('/force_logout', removeAllRefreshTokensFromUser);
authRouter.put('/refresh_jwt', updateRefreshTokenForUser);

export { authRouter };