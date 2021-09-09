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
    <ul>
        {
            productos.map((producto) => {return <Item key={producto.id} producto={producto} />})
        }
    </ul>
    </div>
    )    

}

export default ItemList