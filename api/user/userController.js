import bcryptjs from 'bcryptjs';
import { User } from './userModel.js';

const createUser = async (req, res, next) => {
    const reqBody = req.body;
    reqBody.password = bcryptjs.hashSync(reqBody.password);
    
    try {
        const newUser = new User(reqBody);
        await newUser.save();
    } catch {
        res.status(422).json({message: 'duplicate email'});
    }    

    res.json({message: `User ${reqBody.name} created`})
}

export { createUser }