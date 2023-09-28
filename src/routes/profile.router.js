import { Router } from 'express';
import profileController from '../controllers/profile/profile.controller';

const PriceRouter = Router();

PriceRouter
  .post('/login', profileController.login)
  .post('/register', profileController.register)
  .get('/get', profileController.get_user)
  .post('/delete', profileController.user_delete);

export default PriceRouter;
