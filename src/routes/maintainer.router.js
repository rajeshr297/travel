import { Router } from 'express';
import MaintainerController from '../controllers/maintainer/maintainer.controller';
import { upload } from '../middlewares/multer';

const TrolleyRouter = Router();

TrolleyRouter
  .post('/addmaintainer', MaintainerController.add_maintainers)
  .get('/getmaintainer', MaintainerController.getmaintainer)
  .put('/updatemaintainer', MaintainerController.update_maintainer)
  .post('/deletemaintainer', MaintainerController.deletemaintainer)
  .get('/getcount', MaintainerController.getcount)
  .get('/getproductcount', MaintainerController.product_count)
  .post('/maintainerinsert', upload.single('csv'), MaintainerController.maintainer_inserts);

export default TrolleyRouter;
