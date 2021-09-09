import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({producto}) => {
    return (
        <ul>
            <div className='card w-50 mt-2'>
                <img src={producto.img} alt="iphone" width="50" height="60"></img>
                <div className="card-header">
                    {producto.name}
                </div>
                <div className="card-body">
                    {producto.modelo}
                </div>
                <Link to='/detalle'>
                    <button>Mas info</button>
                </Link>
            </div>
        </ul>     
)
}

export default Item;

