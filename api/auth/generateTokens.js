import path, { dirname } from 'path';
import jsonwebtoken from 'jsonwebtoken';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToKey = path.resolve(__dirname, '..', '..', 'config', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const issueJWT = user => {
    const { _id } = user;
    const expiresIn = 900; // 15 minutes in seconds

    const payload = {
        sub: _id,
        iat: Math.floor(Date.now() / 1000)
    };

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
        expiresIn,
        algorithm: 'RS256'
    });

    return {
        jwt: `Bearer ${signedToken}`,
        expires: expiresIn
    }
}

export { issueJWT }