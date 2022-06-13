import mongoose from 'mongoose'
import { User, Category, Product } from './models/index.js'

export default function setupDb() {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) throw new Error('DATABASE_URL is required in the env.')

  return mongoose.connect(databaseUrl)
}
