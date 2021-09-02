import React from 'react';

const Item = ({producto}) => {
    return (
        <ul>
            <div className='card w-50 mt-2'>
            <div className="card-header">
                {producto.name}
            </div>
            <div className="card-body">
                {producto.modelo}
            </div>
        </div>  
    </ul>     
)
}

export default Item;

