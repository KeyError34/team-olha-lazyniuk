import express, { Request, Response } from 'express';
const router = express.Router();
// import UserService from '../services/userService.js';

// const router = express.Router();
// const userService = new UserService();

// // Endpoint to create a new user
// router.post('/users', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const newUser = await userService.createUser(req.body);
//     res.status(201).json(newUser);
//   } catch (err: any) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Endpoint to get a user by ID
// router.get('/users/:id', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     res.status(200).json(user);
//   } catch (err: any) {
//     res.status(404).json({ message: err.message });
//   }
// });

// // Endpoint to update a user
// router.put('/users/:id', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const updatedUser = await userService.updateUser(req.params.id, req.body);
//     res.status(200).json(updatedUser);
//   } catch (err: any) {
//     res.status(404).json({ message: err.message });
//   }
// });

// // Endpoint to delete a user
// router.delete('/users/:id', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const response = await userService.deleteUser(req.params.id);
//     res.status(200).json(response);
//   } catch (err: any) {
//     res.status(404).json({ message: err.message });
//   }
// });

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default router;
