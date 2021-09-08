import React from 'react';


//title, price, name, model, img
const ItemDetail = ({producto}) => {
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
            </div>
        </ul>     
)
}

export default ItemDetail;
