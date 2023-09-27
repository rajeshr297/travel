import logger from '../../middlewares/logger';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

import MaintainerService from '../../services/maintainer/maintainer.service';

class MaintainerController {
  async add_maintainers(req, res) {
    try {
      const {
        maintenance_period,
        type_of_trolley,
        trolley_no,
        wheels,
        grounding_chain,
        fasteners_and_aluminium_profile,
        rack_sides,
        stopper_rod,
        name_tag,
        next_due_period,
        actual_product_use,
        date_of_maintenance,
        shift_of_maintenance,
        remarks,
      } = req.body;

      const result = await MaintainerService.add_maitainer(
        maintenance_period,
        type_of_trolley,
        trolley_no,
        wheels,
        grounding_chain,
        fasteners_and_aluminium_profile,
        rack_sides,
        stopper_rod,
        name_tag,
        next_due_period,
        actual_product_use,
        date_of_maintenance,
        shift_of_maintenance,
        remarks,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller maintainer add -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async update_maintainer(req, res) {
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

      const result = await MaintainerService.trolleyupdate(
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

  async deletemaintainer(req, res) {
    try {
      const {
        trolley_id,
      } = req.body;

      const result = await MaintainerService.trolleydelete(
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

  async getmaintainer(req, res) {
    try {
      const result = await MaintainerService.get_maitainer();
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
      const result = await MaintainerService.counntdetail();
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
      const result = await MaintainerService.barchartloader();
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

  async maintainer_inserts(req, res) {
    try {
      const { user_id } = req.body;
      const csvfile = req.file;

      const result = await MaintainerService.maintainer_insert(user_id, csvfile);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller maintainer_insert -> ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new MaintainerController();
