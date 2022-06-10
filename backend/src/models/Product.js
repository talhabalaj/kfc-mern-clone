import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  slug: {
    type: String,
    index: {
      unique: true,
    },
  },
  description: String,
  price: Number,
  image: {
    type: mongoose.Schema.Types.Buffer,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
})

export const Product = mongoose.model('Product', productSchema)