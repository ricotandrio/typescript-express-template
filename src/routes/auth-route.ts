import express from 'express';
import { authMiddleware } from '../middlewares/auth';

export const authRoute = express.Router();
authRoute.use(authMiddleware);
