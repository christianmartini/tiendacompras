

function ItemDetailContainer ({name,stock,initial,onAdd}){
    
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
export default ItemDetailContainer