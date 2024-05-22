import { Request, Response, Router } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../entities/User';

const router = Router();
const userService = new UserService();

router.get('/', async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const user = await userService.getUserById(Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.post('/', async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req.body as User);
  res.status(201).json(newUser);
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(Number(req.params.id), req.body as Partial<User>);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).send('User not found');
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await userService.deleteUser(Number(req.params.id));
  res.status(204).send();
});

router.get('/email/:email', async (req: Request, res: Response) => {
  const user = await userService.getUserByEmail(req.params.email);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.post('/bulk', async (req: Request, res: Response) => {
  const newUsers = await userService.createUsers(req.body as User[]);
  res.status(201).json(newUsers);
});

export default router;