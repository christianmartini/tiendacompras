import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

var productos = [
    { id: 1, title: "Iphone como nuevo", price:38000, name: "iphone", model:'11', img:"https://static.toiimg.com/photo/71396840.cms" },
    { id: 2, title: "Samsung S20 usado", price:27999, name: "Samsung", model:'S20', img:"https://media.ldlc.com/r1600/ld/products/00/05/59/05/LD0005590584_2.jpg" },
    { id: 3, title: "Motorola en perfecto estado", price:16850, name: "Motorola", model:'G2', img:"https://venezuela.tiendacelular.com/oc-content/uploads/384/808131.jpg" },
    { id: 4, title: "Apple", price:8200, name: "iphone", model:'5', img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/5-apple-iphone-5s-796-1597837279.jpg?crop=1xw:1xh;center,top&resize=480:*" },
    { id: 5, title: "Nokia", price:1500, name: "A", model:'1100', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg/1200px-Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg" },
    { id: 6, title: "Google", price:45000, name: "Pixel", model:'4XL', img:"https://acf.geeknetic.es/imgri/imagenes/noticias/2019/17581-google-pixel-4-xl-muestra.jpg?f=webp" },
    { id: 7, title: "OnePlus", price:18000, name: "5", model:'T', img:"https://www.muycomputer.com/wp-content/uploads/2017/11/OnePlus5T.jpg" },
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