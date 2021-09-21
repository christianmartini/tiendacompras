import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router";
import {productos} from '../../utils/promises'

function ItemDetailContainer ({producto}){

    const [itemdet, setItemdet] = useState({});
    
    const {id} = useParams()
    
    useEffect(() => {
        const findItem = new Promise((resolve,reject) => {
            setTimeout(() => {
                productos ? resolve(productos) : reject("Error 404")
             }, 2000);
            })
        findItem
        .then(resolve => {
            setItemdet(resolve[id -1])
            console.log(resolve)
        })
       }, [id,producto])

    return (
        <div>
            <ItemDetail producto={itemdet}/>
        </div>
    )
}
export default ItemDetailContainer