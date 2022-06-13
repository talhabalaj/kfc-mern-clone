import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CounterButton } from '../../components'
import { Button } from '../../../../components'
import { useGetProductQuery } from '../../api'
import { addItem } from '../../../cart/'

import './ProductPage.scss'

export const ProductPage = () => {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { data } = useGetProductQuery(slug)
  const prevDocTitleRef = useRef(document.title)
  const dispatch = useDispatch()

  const { _id, name, description, price } = data?.data || {}

  useEffect(() => {
    document.title = name || document.title
    return () => {
      document.title = prevDocTitleRef.current
    }
  }, [name])

  const onAddToBucketClick = () => {
    dispatch(addItem({ id: _id, quantity }))
  }

  return (
    <div className="product-page">
      <div className="product-page__image">
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}product/${slug}/image`}
        />
      </div>
      <div className="product-page__content">
        <h2 className="product-page__heading">{name}</h2>
        <p>{description}</p>
        <h2 className="product-page__price">
          PKR {(price * quantity).toLocaleString()}
        </h2>
        <div className="product-page__buy">
          <CounterButton
            value={quantity}
            onChange={(newValue) => {
              if (newValue >= 1 && newValue <= 100) setQuantity(newValue)
            }}
          />
          <Button disabled={!_id} onClick={onAddToBucketClick}>
            Add to Bucket
          </Button>
        </div>
        <p>*Prices may vary at motorway outlets</p>
      </div>
    </div>
  )
}
