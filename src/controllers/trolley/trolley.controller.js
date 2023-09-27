import logger from '../../middlewares/logger';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

import TrolleyService from '../../services/trolley/trolley.service';

class TrolleyController {
  async add_trollerys(req, res) {
    try {
      const {
        department_code,
        trolley_no,
        haip_no,
        rfid,
        part_code,
        part_code_description,
        loading_quantity,
      } = req.body;

      const result = await TrolleyService.add_trolley(
        department_code,
        trolley_no,
        haip_no,
        rfid,
        part_code,
        part_code_description,
        loading_quantity,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller trolley add -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async update_trollerys(req, res) {
    try {
      const {
        trolley_id,
        department_code,
        trolley_no,
        haip_no,
        rfid,
        part_code,
        part_code_description,
        loading_quantity,
      } = req.body;

      const result = await TrolleyService.trolleyupdate(
        trolley_id,
        department_code,
        trolley_no,
        haip_no,
        rfid,
        part_code,
        part_code_description,
        loading_quantity,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller trolley add -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async deletetrolley(req, res) {
    try {
      const {
        trolley_id,
      } = req.body;

      const result = await TrolleyService.trolleydelete(
        trolley_id,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller trolley delete -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async gettrolleys(req, res) {
    try {
      const result = await TrolleyService.gettrolley();
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller get trolleys-> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async getcount(req, res) {
    try {
      const result = await TrolleyService.counntdetail();
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller get trolleys-> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async product_count(req, res) {
    try {
      const result = await TrolleyService.barchartloader();
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller product_count trolleys-> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new TrolleyController();
