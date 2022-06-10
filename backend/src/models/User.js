import mongoose from 'mongoose'

const addressSchema = mongoose.Schema({
  streetAdress: String,
  city: String,
  province: String,
})

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  address: {
    type: addressSchema,
  },
  phone: String,
  zipCode: String,
})

const User = mongoose.model('User', userSchema)

export { User }
