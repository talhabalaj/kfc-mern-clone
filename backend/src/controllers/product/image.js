import { Product } from '../../models/Product.js'
import { catchAsync } from '../../utils/catchAsync.js'
import { ApiError } from '../../utils/error.js'
import { fileTypeFromBuffer } from 'file-type'

export const image = catchAsync(async (req, res, next) => {
  const { slug } = req.params

  const product = await Product.findOne({ slug }, { image: 1, _id: 0 })

  if (!product) throw new ApiError('Not found', 404)

  const buffer = Buffer.from(product.image, 'base64')

  res.header('Content-Type', fileTypeFromBuffer(buffer))
  res.send(buffer)
})
