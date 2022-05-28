import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

const User = new mongoose.Schema({
  content: {type: String},
  numberOrder: {type: Number, required: true},
  email: {type: String},
  phone: {type: String},
	data: {type: Date},
});

User.plugin(mongoosePaginate);
export default mongoose.model('User', User);