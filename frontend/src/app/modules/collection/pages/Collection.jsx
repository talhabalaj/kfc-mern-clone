import { useParams } from 'react-router-dom'
import { ProductListingCard } from '../components/ProductListingCard/ProductListingCard'
import './Collection.scss'

export default () => {
  const { slug } = useParams()

  return (
    <section className="collection">
      <h1 className="collection__header">{slug.replace('-', ' ')}</h1>
      <div className="collection__listings">
        <ProductListingCard />
        <ProductListingCard />
        <ProductListingCard />
        <ProductListingCard />
        <ProductListingCard />
      </div>
    </section>
  )
}
