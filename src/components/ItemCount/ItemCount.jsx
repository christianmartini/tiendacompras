import { useState } from "react";

function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(1);
    
    const handlerClickSum = () => {
        setCount(count + 1);
    };
    
    const handlerClickRest = () => {
        setCount(count - 1);
    };

    const handlerOnAdd = () => {
        onAdd(count);
        setCount(initial);
    };

    if (count<1){
        setCount(count + 1);
        return (
            alert("no se puede agregar una cantidad menor a uno al carrito")
        ) 
    }
    else if (count>stock)
    {
        setCount(count - 1);
        return (
            alert("no hay suficiente stock para agregar al carrito")
        )  
    }
    else{
        return (
            <div>
                <button className="btn"  onClick={handlerClickRest}>-</button>
                <label className="btn">{count}</label>
                <button className="btn" onClick={handlerClickSum}>+</button>
                <button className="btn" onClick={handlerOnAdd}>Agregar</button>
            </div>
        )
    }  
};

export default ItemCount