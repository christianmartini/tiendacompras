import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext);
    const {carrito} = useContext(CartContext);

    const [changeButton, setChangeButton ] = useState(false)

    const onAdd = (count) => {
        setChangeButton(true)
        //alert("agregaste " + count +" productos")
        console.log(producto)
        console.log(count)
        addItem(producto, count);
    }

    return (
        <ul>
            <h1>Detalle de Producto</h1>
            <div className='card w-50 mt-2'>
                <img src={producto.img} alt="telefono" width="50" height="60"></img>
                <div className="card-body">
                    {producto.title}
                </div>
                <div className="card-header">
                    {producto.price}
                </div>
                <div className="card-body">
                    {producto.name}
                </div>
                <div className="card-body">
                    {producto.model}
                </div>
                {!changeButton && <ItemCount onAdd={onAdd} stock={10} initial={1} changeButton={changeButton} />}
                {changeButton && <Link to="/cart"><button>Terminar la compra</button></Link> }
            </div>
        </ul>     
)
}

export default ItemDetail;
