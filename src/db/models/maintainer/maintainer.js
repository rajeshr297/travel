import { Schema, model } from 'mongoose';

const MaintainerSchema = new Schema({
  maintenance_period: { type: String },
  type_of_trolley: { type: String },
  trolley_no: { type: String },
  wheels: { type: String },
  grounding_chain: { type: String },
  fasteners_and_aluminium_profile: { type: String },
  rack_sides: { type: String },
  stopper_rod: { type: String },
  name_tag: { type: String },
  next_due_period: { type: String },
  actual_product_use: { type: String },
  date_of_maintenance: { type: String },
  shift_of_maintenance: { type: String },
  remarks: { type: String },
}, { timestamps: true });

export default model('maintainer', MaintainerSchema);
