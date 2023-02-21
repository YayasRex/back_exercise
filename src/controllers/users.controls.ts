import { dataSource } from "../db/conection";
import { Users } from '../entities';
import { Request, Response } from 'express';

const usersRepository = dataSource.getRepository(Users);

export const addUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const createUser = usersRepository.create(body);
    const newUser = await usersRepository.save(createUser);
    return res.status(201).json({ message: 'User created', data: newUser })
  } catch (error) {
    return res.status(400).json(error)
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await usersRepository.find();
    return res.status(201).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// export const updateUser = async (req: Request, res: Response) => {
//   //Se saca el params para poder obtener el id del usuario a actualizar
//   const { params } = req;
//   const { body } = req;
  
//   try {
//     const userFounded = await Users.findUs
//   }
// }
