import logger from '../../middlewares/logger';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

import ProfileService from '../../services/profile/profile.service';

class PriceController {
  async login(req, res) {
    logger.info('inside admin login controller');
    try {
      const { email, password } = req.body;
      const result = await ProfileService.logins(email, password);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller admin login -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async register(req, res) {
    logger.info('inside admin register controller');
    try {
      const { email, password } = req.body;
      const result = await ProfileService.register(email, password);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller admin register -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new PriceController();
