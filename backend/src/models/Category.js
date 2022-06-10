import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
  name: String,
  slug: {
    type: String,
    index: {
      unique: true,
    },
  },
})

export const Category = mongoose.model('Category', categorySchema)
