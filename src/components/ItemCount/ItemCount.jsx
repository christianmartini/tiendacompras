import { useState } from "react";

function ItemCount({stock, initial, onAdd, changeButton}){

    const [count, setCount] = useState(1);
    
    const handlerClickSum = () => {
        if (count<stock){
            setCount(count + 1);
        }
    };
    const handlerClickRest = () => {
        if (count<stock && count>1){
            setCount(count - 1);
        }
    };

    const handlerOnAdd = () => {
        onAdd(count);
        setCount(initial);
    };
    return (
        <div>
            <button className="btn"  onClick={handlerClickRest}>-</button>
            <label className="btn">{count}</label>
            <button className="btn" onClick={handlerClickSum}>+</button>
            {!changeButton && <button className="btn" onClick={handlerOnAdd}>Agregar</button>}
        </div>
    ) 
};

export default ItemCount