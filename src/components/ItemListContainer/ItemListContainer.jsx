import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { findItems } from '../../utils/promises';



function ItemListContainer ({name,stock,initial,onAdd}){
    
    const [items, setItems] = useState([]);
    const { category } = useParams()
    useEffect(() => {
    console.log(category)
    if (category === undefined){
        findItems
            .then((res)=> setItems(res))
    }
    else{
        findItems
             .then((res)=> setItems(res.filter(r => category === r.categoria)))
    }
    }, [category])

    return (
        <div>
            <h1>Hola {name}!!!</h1>
            <ItemList productos={items}/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}
export default ItemListContainer