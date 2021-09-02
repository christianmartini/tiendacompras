import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const productos = [
    { id: 1, title: "xxx", price:38.80, name: "iphone", modelo:'11', img:"Url" },
    { id: 2, name: "iphone", modelo: '11' },
    { id: 3, name: "pixel", modelo: '5a' },
    { id: 4, name: "iphone", modelo: '11' },
    { id: 5, name: "pixel", modelo: '4 XL' },
    { id: 6, name: "Galaxy", modelo: 'S21' },
]

function ItemListContainer ({name,stock,initial,onAdd}){
    
    const [items, setItems] = useState([]);
    useEffect(() => {
    let findItems = new Promise((resolve) => {
        setTimeout(() => {
             resolve(productos);        //operador ternario
         }, 2000);
        })
         findItems.then((res)=> setItems(res))
       }, [])

    return (
        <div>
            <h1>Hola {name}!!!</h1>
            <ItemList productos={items}/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}
export default ItemListContainer