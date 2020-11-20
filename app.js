import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import { config as dotenvConfig } from 'dotenv';
import { connectDB } from './config/connectDB.js'
import { passportConfig } from './config/passportConfig.js'
import { indexRouter } from './api/index.js';
import { authRouter } from './api/auth/authRouter.js';
import { userRouter } from './api/user/userRouter.js'

dotenvConfig({path: './config.env'});

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV));
app.use(passport.initialize());

// Connect to MongoDB
connectDB();

// Configure passport
passport.use(passportConfig);

// Define routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);


app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`,
  ),
);