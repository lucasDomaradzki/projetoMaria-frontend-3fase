import * as mongoose from 'mongoose';
import { environment } from "../common/environment";

// Use this to debug mongoose
mongoose.set("debug", true);

export interface User extends mongoose.Document {
  name: string,
  email: string,
  password: string
};

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
    minlength: 3
  },
  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
export default User;