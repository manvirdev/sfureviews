import { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true },
  sfuEmail: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  pronouns: { type: String, required: false },
  phone: { type: String, required: false },
  dateRegistered: { type: Date, required: false },
  isActive: { type: Boolean, required: false }
});

export default UserSchema;
