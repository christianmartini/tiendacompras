import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const onAdd=(cant)=>{
    alert("Ud. a agregado " + cant + " unidades al carrito")     
}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                <div onSubmit={handleInter}><ItemCount onAdd={onAdd} stock={10} initial={1} /></div>
                : 
                    <button>Ir al carrito</button>
            }
            {/* <Count onConfirm={addToCart} maxQuantity={itemMax} /> */}
        </div>
    )
}

export default Intercambiabilidad
