import express from 'express';
const router = express.Router();

import UserController from '../controllers/user.controller';

router.get('/user/:id', UserController.userController);

export default router;
