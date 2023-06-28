import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const users = model('user', UserSchema);

export default users;
