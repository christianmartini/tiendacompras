import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {
    console.log(producto)

    const [changeButton, setChangeButton ] = useState(false)

    const onAdd = () => {
        setChangeButton(true)
        alert("agregaste articlos al carrtio")
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
                <button>Mas info</button>  
                {!changeButton && <ItemCount onAdd={onAdd} stock={10} initial={1} changeButton={changeButton} />}
                {changeButton && <Link to="/cart"><button>Terminar la compra</button></Link> }
            </div>
        </ul>     
)
}

export default ItemDetail;
