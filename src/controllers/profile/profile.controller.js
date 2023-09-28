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
      const {
        email, password, name, department,
      } = req.body;
      const result = await ProfileService.register(name, department, email, password);
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

  async get_user(req, res) {
    logger.info('inside admin get users controller');
    try {
      const result = await ProfileService.get_users();
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller get users -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async user_delete(req, res) {
    logger.info('inside admin user delete controller');
    try {
      const {
        user_id,
      } = req.body;
      const result = await ProfileService.delete_users(user_id);
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
