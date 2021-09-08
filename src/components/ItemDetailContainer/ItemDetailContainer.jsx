import { useEffect, useState } from 'react';
import { findItem } from '../../utils/promises';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer ({id}){

    const [itemdet, setItemdet] = useState({});
    useEffect(() => {
        findItem
        .then(resp => {
            setItemdet(resp)
        })
       }, [])


    return (
        <div>
            <ItemDetail producto={itemdet}/>
        </div>
    )
}
export default ItemDetailContainer