import { useDispatch, useSelector } from 'react-redux'
import { Drawer } from '../../../../components'
import { closeCart, openCart } from '../../store/cartSlice'

import './Cart.scss'

export const Cart = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length)
  const isCartOpen = useSelector((state) => state.cart.open)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        className="cart-button"
        onClick={() => dispatch(!isCartOpen ? openCart() : closeCart())}
      >
        {cartItemsCount}
      </button>
      <Drawer isOpen={isCartOpen} onClose={() => dispatch(closeCart())}>
        <div className="cart">
          <div className="cart__header">
            <h2>Your Bucket</h2>
            <div className="cart-button">{cartItemsCount}</div>
            <span className="cart__total-price">PKR 0</span>
          </div>
          <div className="cart__body">
            {cartItemsCount < 1 && (
              <span className="cart__empty-state-msg">
                'Hungry? Add something to your bucket, man!!'
              </span>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  )
}
