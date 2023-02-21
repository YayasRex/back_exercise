import { Router } from 'express';
import { addUser, getUsers } from '../controllers/users.controls'

export const usersRouter = Router();

usersRouter.post('/create', addUser);

usersRouter.get('/get', getUsers);

// usersRouter.put('/update/:id',);

// usersRouter.delete('/delete/:id',);