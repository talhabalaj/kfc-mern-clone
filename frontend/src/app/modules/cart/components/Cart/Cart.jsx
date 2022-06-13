import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Drawer } from '../../../../components'
import { useListProductsQuery } from '../../../product/api'
import { clearItems, closeCart, openCart } from '../../store/cartSlice'
import { CartItem } from '../CartItem'

import './Cart.scss'

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const cartIds = useMemo(() => cartItems.map((item) => item.id), [cartItems])
  const isCartOpen = useSelector((state) => state.cart.open)
  const cartItemsCount = cartIds.length
  const dispatch = useDispatch()

  const { data } = useListProductsQuery(cartIds, {
    skip: !cartIds || cartIds.length < 1,
  })

  const cartProducts = data?.data
  const cartItemsWithProducts = useMemo(() => {
    return cartItems.map((item) => {
      const cartProduct = cartProducts?.find(
        (product) => product._id === item.id
      )
      return {
        product: cartProduct,
        ...item,
      }
    })
  }, [cartProducts, cartItems])
  const totalPrice = useMemo(
    () =>
      cartItemsWithProducts.reduce((acc, cur) => {
        return acc + (cur.product?.price || 0) * cur.quantity
      }, 0),
    [cartItemsWithProducts]
  )

  return (
    <div>
      <button
        className="cart-button"
        onClick={() => dispatch(!isCartOpen ? openCart() : closeCart())}
      >
        {cartItemsCount}
      </button>
      {totalPrice > 0 && <span className="cart-total">PKR {totalPrice}</span>}
      <Drawer isOpen={isCartOpen} onClose={() => dispatch(closeCart())}>
        <div className="cart">
          <div className="cart__header">
            <h2>Your Bucket</h2>
            <div className="cart-button">{cartItemsCount}</div>
            <span className="cart__total-price">PKR {totalPrice}</span>
          </div>
          <div className="cart__body">
            {cartItemsCount < 1 ? (
              <span className="cart__empty-state-msg">
                Hungry? Add something to your bucket, man!!
              </span>
            ) : (
              <>
                <div className="cart__items">
                  {cartItemsWithProducts?.map((item) => {
                    return <CartItem item={item} />
                  })}
                </div>
                <div className="cart__actions">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      dispatch(clearItems())
                    }}
                  >
                    Clear Cart
                  </Button>
                  <Button>Proceed Checkout</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  )
}
