import { Schema, model } from 'mongoose';

const MaintainerSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    total_record: { type: Number },
    total_created: { type: Number },
    total_updated: { type: Number },
    status: { type: String, default: 'Pending', enum: ['Pending', 'InProgress', 'Success', 'Failed'] },
    type_bulkinsert: { type: String },
    created_date: { type: String },
    created_time: { type: String },

  },
  { timestamps: true },
);

export default model('maintainerinsertbulk', MaintainerSchema);
