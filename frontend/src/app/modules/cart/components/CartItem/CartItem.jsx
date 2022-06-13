import { FiXCircle } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Button } from '../../../../components'
import { removeItem, changeQuantity } from '../../store/cartSlice'

import './CartItem.scss'

export const CartItem = ({ item }) => {
  const { id, quantity, product } = item
  const dispatch = useDispatch()

  const MAX_QUANTITY = 100,
    MIN_QUANTITY = 1

  const increaseQuantity = () => {
    return dispatch(
      changeQuantity({
        id,
        fn: (value) => (value === MIN_QUANTITY ? MIN_QUANTITY : value - 1),
      })
    )
  }

  const decreaseQuantity = () => {
    return dispatch(
      changeQuantity({
        id,
        fn: (value) => (value >= MAX_QUANTITY ? MAX_QUANTITY : value + 1),
      })
    )
  }

  return (
    <div className="cart-item">
      <div className="cart-item__first-row">
        <h4 className="cart-item__name">{product?.name}</h4>
        <div className="cart-item__action">
          <h4 className="cart-item__price">PKR {product?.price * quantity}</h4>
          <FiXCircle
            className="cart-item__remove-button"
            onClick={() => {
              dispatch(removeItem({ id }))
            }}
          />
        </div>
      </div>
      <div>
        {quantity} x PKR {product?.price}
      </div>
      <div className="cart-item__quantity-actions">
        <Button variant={'secondary'} size={'small'} onClick={increaseQuantity}>
          -
        </Button>
        <Button variant={'secondary'} size={'small'} onClick={decreaseQuantity}>
          +
        </Button>
      </div>
    </div>
  )
}
