import { Router } from 'express';
import trolleyController from '../controllers/trolley/trolley.controller';

const TrolleyRouter = Router();

TrolleyRouter
  .post('/addtrolley', trolleyController.add_trollerys)
  .get('/gettrolley', trolleyController.gettrolleys)
  .put('/updatetrolley', trolleyController.update_trollerys)
  .post('/deletetrolley', trolleyController.deletetrolley)
  .get('/getcount', trolleyController.getcount)
  .get('/getproductcount', trolleyController.product_count);

export default TrolleyRouter;
