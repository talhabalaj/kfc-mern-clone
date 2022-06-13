import { Link } from 'react-router-dom'

import './ProductListingCard.scss'

export const ProductListingCard = ({
  product: { _id, name, slug, description, price },
}) => {
  return (
    <Link
      className="invisible-link product-listing-card"
      to={`/product/${slug}`}
    >
      <div className="product-listing-card__image">
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}product/${slug}/image`}
          alt={name}
        />
      </div>
      <div className="product-listing-card__content">
        <h3 className="product-listing-card__heading">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="buy-button">
        <div className="buy-button__price">PKR {price}</div>
        <button className="buy-button__button">Add to Bucket</button>
      </div>
    </Link>
  )
}
