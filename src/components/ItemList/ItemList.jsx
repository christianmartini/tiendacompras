import React from 'react';
import Item from '../Item/Item'

function ItemList({productos}) {
    // if (id===undefined) {
    //     return productos
    // }else{
    //     return productos.find( producto=> producto.id === id)
    // }



return (
    <div>
    <h1>Mis productos</h1>
    <ul>
        {
            productos.map((producto) => {return <Item key={producto.id} producto={producto} />})
        }
    </ul>
    </div>
    )    

}

export default ItemList