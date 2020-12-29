import bcryptjs from 'bcryptjs';
import { User } from './userModel.js';

const createUser = async (req, res, next) => {
    const reqBody = req.body;
    reqBody.password = bcryptjs.hashSync(reqBody.password);
    
    try {
        const newUser = await User.create(reqBody);
    } catch (error) {
        res.status(422).json({message: 'duplicate email', error: error});
    }    

    res.json({message: `User ${reqBody.email} created`})
}

export { createUser }