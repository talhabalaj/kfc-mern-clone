import { Product } from '../../models/Product.js'
import { catchAsync } from '../../utils/catchAsync.js'
import { ApiError } from '../../utils/error.js'

export const list = catchAsync(async (req, res) => {
  const { ids } = req.body

  if (!ids || !Array.isArray(ids)) throw new ApiError('Bad request', 400)

  const products = await Product.find(
    {
      _id: { $in: ids },
    },
    { name: 1, description: 1, price: 1, slug: 1 }
  )

  if (!products) throw new ApiError('Not found', 404)

  return res.json({
    message: 'ok',
    data: products.map(product => product.toObject()),
  })
})
