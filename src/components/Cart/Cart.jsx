// import React from 'react';

// const Cart = () => {
//     return (  
//         <h1>En construcción</h1>
//     )
// }
 
// export default Cart;

import React, {useContext, Fragment} from 'react';
import {CartContext} from '../../context/CartContext'
import {Link} from "react-router-dom"
const Cart = () => {
    const {carrito, removeItem, clear} = useContext(CartContext)
    console.log('carrito', carrito);
    return (
            <Fragment>
                {!carrito.length ? (<Link to="/"><button>carrito vacio, compre algo</button></Link>)
                :
                (<div>
                    {carrito.map(prod =>  <div>
                                <h1>{prod.item.name}</h1>
                                <img src={prod.item.img} alt="imagen" width='400px'></img>
                                <button onClick={()=>removeItem(prod.item.id)} >X</button>
                                </div>)}
            <button onClick={clear} >vaciar carrito</button>
            <Link to='/'><button>seguir comprando</button></Link>
            </div>)}
        </Fragment>
    )
}
export default Cart;