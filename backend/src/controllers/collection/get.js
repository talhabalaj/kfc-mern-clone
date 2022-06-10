import { Product } from '../../models/Product.js'
import { catchAsync } from '../../utils/catchAsync.js'

export const get = catchAsync(async (req, res, next) => {
  const { slug } = req.params

  const products = await Product.find(
    {},
    { name: 1, description: 1, price: 1, slug: 1 }
  ).populate({
    path: 'category',
    match: {
      slug,
    },
  })

  const result = products.map(product => product.toObject())
    .filter(product => product.category !== null)


  return res.json({
    message: 'ok',
    data: result,
  })
})
