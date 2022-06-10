import { Link } from 'react-router-dom'

import './ProductListingCard.scss'

export const ProductListingCard = () => {
  return (
    <Link className='invisible-link' to={'/product/some-product'}>
      <div className="product-listing-card">
        <div className="product-listing-card__image">
          <img src="/assets/test-product-pic.png" alt={'product name'} />
        </div>
        <div className="product-listing-card__content">
          <h3 className="product-listing-card__heading">Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis nisi debitis ratione praesentium in, dolore quae
            accusantium,
          </p>
          <div className="buy-button">
            <div className="buy-button__price">PKR 210</div>
            <button className="buy-button__button">Add to Bucket</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
