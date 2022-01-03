import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  image: String,
  price: String,
});

export default mongoose.model('products',Product);