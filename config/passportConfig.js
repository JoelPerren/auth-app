import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { User } from '../api/user/userModel.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToKey = path.resolve(__dirname, 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const strategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const passportConfig = new JWTStrategy(strategyOptions, (jwtPayload, done) => {
    User.findOne({ _id: jwtPayload.sub }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        return done(null, user);
    });
});

export { passportConfig };