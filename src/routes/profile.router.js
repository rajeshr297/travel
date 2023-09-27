import { Router } from 'express';
import profileController from '../controllers/profile/profile.controller';

const PriceRouter = Router();

PriceRouter.post('/login', profileController.login);
PriceRouter.post('/register', profileController.register);

export default PriceRouter;
