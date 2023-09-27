import { Schema, model } from 'mongoose';

const TrolleySchema = new Schema({
  department_code: { type: String },
  trolley_no: { type: String },
  haip_no: { type: String },
  rfid: { type: String },
  part_code: { type: String },
  part_code_description: { type: String },
  loading_quantity: { type: String },
}, { timestamps: true });

export default model('trolley', TrolleySchema);
