import { parse } from 'fast-csv';
import { Bulkinsert, Maintainer } from '../db/models';

const streamifier = require('streamifier');

export async function bulkinsert(upload_id, csvfile) {
  const dataFromRows = [];
  let total_record = 0;
  const update_record = 0;
  const created_record = 0;
  await Bulkinsert.updateOne({ _id: upload_id }, {
    $set: {
      status: 'InProgress',
    },
  }, { new: true });
  streamifier
    .createReadStream(csvfile.buffer)

    .pipe(parse({ headers: true/* ignoreEmpty: true */ }))
    .on('error', (error) => console.error(error))

    .on('data', async (row) => {
      // dataFromRows.push(row);
      const update = await Maintainer.findOneAndUpdate({ trolley_no: row.Number }, {
        $set: {
          maintenance_period: row.Maintenance_Period,
          type_of_trolley: row.Type_of_Trolley,
          wheels: row.Wheels,
          grounding_chain: row.Grounding_Chain,
          fasteners_and_aluminium_profile: row.Fasteners_and_Aluminium_profile,
          rack_sides: row.Rack_Sides,
          stopper_rod: row.Stomaintenance_periodpper_Rod,
          name_tag: row.Name_tag,
          next_due_period: row.Next_Due_Period,
          actual_product_use: row.Actual_Product_use,
          date_of_maintenance: row.Date_of_Maintenance,
          shift_of_maintenance: row.shift_of_Maintenance,
          remarks: row.Remark,
        },
      }, { new: true });
      if (!update) {
        await Maintainer.create({
          maintenance_period: row.Maintenance_Period,
          type_of_trolley: row.Type_of_Trolley,
          wheels: row.Wheels,
          grounding_chain: row.Grounding_Chain,
          fasteners_and_aluminium_profile: row.Fasteners_and_Aluminium_profile,
          rack_sides: row.Rack_Sides,
          stopper_rod: row.Stopper_Rod,
          name_tag: row.Name_tag,
          next_due_period: row.Next_Due_Period,
          actual_product_use: row.Actual_Product_use,
          date_of_maintenance: row.Date_of_Maintenance,
          shift_of_maintenance: row.shift_of_Maintenance,
          remarks: row.Remark,
        });
      }
      console.log(row);
      total_record += 1;
    })
    .on('end', async () => {
      // total_record = dataFromRows.length || 0;
      console.log(total_record);
    });
}
