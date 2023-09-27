import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const ProfileSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    role: { type: String },
  },

);

ProfileSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

ProfileSchema.pre(
  'findOneAndUpdate',
  async function (next) {
    const query = this;
    const update = query.getUpdate();
    // console.log(update.$set.password);

    if (!update.$set.password) {
      return next();
    }

    // hashPassword(update.password, (err, hash) => {
    //   // handle error or go on...
    //   // e.g update.password = hash;
    // });
    const salt = await bcrypt.genSalt(10);
    update.$set.password = await bcrypt.hash(update.$set.password, salt);
  },
  { timestamps: true },
);
export default model('users', ProfileSchema);
