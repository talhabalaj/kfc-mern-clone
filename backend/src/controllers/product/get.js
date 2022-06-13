import { Product } from '../../models/Product.js'
import { catchAsync } from '../../utils/catchAsync.js'
import { ApiError } from '../../utils/error.js'

export const get = catchAsync(async (req, res) => {
  const { slug } = req.params

  if (!slug) throw new ApiError('Bad request', 400)

  const product = await Product.findOne(
    {
      slug,
    },
    { name: 1, description: 1, price: 1, slug: 1 }
  )

  if (!product) throw new ApiError('Not found', 404)

  return res.json({
    message: 'ok',
    data: product.toObject(),
  })
})
