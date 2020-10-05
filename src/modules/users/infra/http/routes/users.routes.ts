import { Router } from 'express';
import UsersControllers from '../controller/UsersControllers';

const userRoutes = Router();

const usersControllers = new UsersControllers();

userRoutes.get('/', usersControllers.index);

export default userRoutes;
