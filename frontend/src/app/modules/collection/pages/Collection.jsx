import { useParams } from 'react-router-dom'
import { useGetCollectionQuery } from '../../api'
import { ProductListingCard } from '../components'
import './Collection.scss'

export const Collection = ({
  slug: slugFromProps = null,
}) => {
  const { slug: slugFromUrl } = useParams()
  const slug = slugFromProps ?? slugFromUrl 
  const { data } = useGetCollectionQuery(slug)

  const result = data?.data || []

  return (
    <section className="collection">
      <h1 className="collection__header">{slug.replace('-', ' ')}</h1>
      <div className="collection__listings">
        {result.map((product) => (
          <ProductListingCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
