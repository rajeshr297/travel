import { Bulkinsert, Trolley } from '../../db/models';
import logger from '../../middlewares/logger';
import { bulkInsertUpload, bulkinsert } from '../../utils/bulkinsert';
// import loaderjson from '../../../loader.json';

class TrolleryService {
  async add_trolley(
    department_code,
    trolley_no,
    haip_no,
    rfid,
    part_code,
    part_code_description,
    loading_quantity,
  ) {
    try {
      const loadingpart = await Trolley.create({
        department_code,
        trolley_no,
        haip_no,
        rfid,
        part_code,
        part_code_description,
        loading_quantity,
      });
      return {
        message: 'successfully create trolley',
        status: 201,
        trolley: loadingpart,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async gettrolley() {
    try {
      const trolley_get = await Trolley.find().sort({ createdAt: -1 });
      return {
        message: 'successfully fetch trolley',
        status: 200,
        trolley: trolley_get,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async trolleyupdate(
    trolley_id,
    department_code,
    trolley_no,
    haip_no,
    rfid,
    part_code,
    part_code_description,
    loading_quantity,
  ) {
    try {
      const update = await Trolley.findOneAndUpdate({ _id: trolley_id }, {
        $set: {
          department_code,
          trolley_no,
          haip_no,
          rfid,
          part_code,
          part_code_description,
          loading_quantity,
        },
      }, { new: true });
      if (!update) {
        return {
          message: 'id not found',
          status: 404,
        };
      }

      return {
        message: 'successfully update trolley',
        status: 200,
        trolley: update,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async trolleydelete(trolley_id) {
    try {
      const trolleydelete = await Trolley.findOneAndDelete({ _id: trolley_id });

      if (!trolley_id) {
        return {
          message: 'id not found',
          status: 404,
        };
      }

      return {
        message: 'successfully delete trolley',
        status: 200,
        trolley: trolleydelete,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async counntdetail() {
    try {
      const countdetails = await Trolley.aggregate([
        {
          $facet: {
            product_no: [
              {
                $group: {
                  _id: '$department_code',
                },
              },
            ],
            trolley_no: [
              {
                $group: {
                  _id: '$trolley_no',
                },
              },
            ],
            haip_no: [
              {
                $group: {
                  _id: '$haip_no',
                },
              },
            ],
          },
        },
        {
          $project: {
            product_no: {
              $cond: { if: { $isArray: '$product_no' }, then: { $size: '$product_no' }, else: 0 },
            },
            trolley_no: {
              $cond: { if: { $isArray: '$trolley_no' }, then: { $size: '$trolley_no' }, else: 0 },
            },
            haip_no: {
              $cond: { if: { $isArray: '$haip_no' }, then: { $size: '$haip_no' }, else: 0 },
            },
          },
        },
      ]);
      return {
        message: 'dashboard data fetch',
        status: 200,
        countdetails,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async barchartloader() {
    try {
      const productcal = await Trolley.aggregate([
        {
          $group: {
            _id: '$department_code',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: 1,
          },
        },
      ]);

      return {
        message: 'successfully product count',
        status: 200,
        trolley: productcal,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async trolley_insert_bulk(user_id, file) {
    try {
      if (file === undefined || !file) {
        return {
          message: 'file is empty',
          status: 404,
        };
      }
      const createbulkrecord = await Bulkinsert.create({
        user_id,
        type_bulkinsert: 'Trolley',
        status: 'InProgress',
      });

      bulkInsertUpload(createbulkrecord._id, file);
      return {
        status: 201,
        message: 'sucessfully inited query insert',
        bulkinsert: createbulkrecord,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new TrolleryService();
