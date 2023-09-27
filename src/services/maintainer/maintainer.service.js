import { Bulkinsert, Maintainer, Trolley } from '../../db/models';
import logger from '../../middlewares/logger';
import { bulkinsert } from '../../utils/bulkinsert';
// import loaderjson from '../../../loader.json';

class TrolleryService {
  async add_maitainer(
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
  ) {
    try {
      const loadingpart = await Maintainer.create({
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
      });
      return {
        message: 'successfully create Maintainer',
        status: 201,
        maintainer: loadingpart,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async get_maitainer() {
    try {
      const maintainer = await Maintainer.find().sort({ createdAt: -1 });
      return {
        message: 'successfully fetch Maintainer',
        status: 200,
        maintainer,
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

  async maintainer_insert(user_id, file) {
    try {
      if (file === undefined || !file) {
        return {
          message: 'file is empty',
          status: 404,
        };
      }
      const createbulkrecord = await Bulkinsert.create({
        user_id,
        type_bulkinsert: 'Maintainer',
        status: 'InProgress',
      });

      bulkinsert(createbulkrecord._id, file);
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
