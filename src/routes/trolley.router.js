import { Router } from 'express';
import trolleyController from '../controllers/trolley/trolley.controller';
import { upload } from '../middlewares/multer';

const TrolleyRouter = Router();

TrolleyRouter
  .post('/addtrolley', trolleyController.add_trollerys)
  .get('/gettrolley', trolleyController.gettrolleys)
  .put('/updatetrolley', trolleyController.update_trollerys)
  .post('/deletetrolley', trolleyController.deletetrolley)
  .get('/getcount', trolleyController.getcount)
  .get('/getproductcount', trolleyController.product_count)
  .post('/trolleyinsert', upload.single('csv'), trolleyController.trolley_inserts);

export default TrolleyRouter;
