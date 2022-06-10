import axios from 'axios'
import { config } from 'dotenv'
import setupDb from './src/setupDb.js'
import { Category } from './src/models/Category.js'
import { Product } from './src/models/Product.js'
import { load } from 'cheerio'

config()

await setupDb()

const categories = await Category.find({})

for (const category of categories) {
  const categoryInfo = await axios
    .get(
      `https://storefront.fishry.com/collection?storeID=F1AFD527-3A71-4926-83BE-38288B2E5152&slug=${category.slug}&updateRedis=false`
    )
    .then((e) => e.data.data[0])

  const { id } = categoryInfo

  const data = await axios
    .post('https://storefront.fishry.com/products', {
      storeID: 'F1AFD527-3A71-4926-83BE-38288B2E5152',
      collectionID: id,
      take: 12,
      skip: 0,
      orderBy: 'date',
      orderSequence: 'DESC',
      outOfStock: true,
      type: [],
      vendor: [],
      variantFilters: {},
      tags: [],
      platform: 'desktop',
    })
    .then((e) => e.data.data)

  await Product.create(
    await Promise.all(
      data.map(async (each) => {
        const imageName = each.productImage[0].Image
        const image = await axios
          .get(`https://cdn.fishry.com/product/${imageName}`, {
            responseType: 'arraybuffer',
          })
          .then((e) => e.data)

        console.log(image)

        const descHtml = load(each.productDescription)

        console.log(descHtml.text())

        return {
          name: each.productName,
          description: descHtml.text(),
          slug: each.productUrl,
          productPrice: each.productPrice,
          image,
          category: category._id,
        }
      })
    )
  ).catch(console.error)
}
