import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer ({name,stock,initial,onAdd}){
    return (
        <div>
            <h1>Hola {name}!!!</h1>
            <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}
export default ItemListContainer