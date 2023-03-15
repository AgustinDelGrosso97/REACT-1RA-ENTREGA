import cart from './img/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart-widgetr' style={{height: '50px', width: '100px' , borderRadius:'40px'}}></img>
            0
        </div>
    )
}

export default CartWidget