import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.send('Welcome to the root of Hercules');
});

export { indexRouter };