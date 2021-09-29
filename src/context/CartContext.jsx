import { useState,createContext } from "react";

// export const CartContext = createContext();

// export const CartContextProvider = ({children}) => 
//     {

//         const [carrito, setCarrito] = useState([0]);
 
//         // const addItem = (producto, count) => 
//         //     {
//         //         setCarrito([...carrito,{producto, count}]);
//         //         console.log(carrito);
//         //     }
    
//         const addItem = (producto, count) => 
//         {
//             console.log("producto.id= " + typeof producto.id);
//             if(isInCart(producto.id))
//             {
//                 const actualizarCarrito = [...carrito];
//                 actualizarCarrito.forEach((element) =>
//                 {
//                     if (element.id === producto.id)
//                     {
//                         element.count += count;
//                     }
//                 })
//                 setCarrito(actualizarCarrito)
//             }
//             else
//             {

//                 setCarrito([...carrito,{producto, count}]);
//                 console.log(carrito)
//             }
//         }
    
//         const isInCart = (id) => 
//         {
//             const verificar = carrito.find(element => element.id === id)   // Algo no me esta funcionando con esta comparación, siempre devuelve "false"
//             return (
//                 verificar  
//                 ) 
//             }

//         return(
//         <CartContext.Provider value={{carrito,addItem}}>
//             {children}
//         </CartContext.Provider>
//         )
//     }

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => 
{
    const [carrito, setCarrito] = useState([]);
    //console.log(‘cartcontext’, carrito);
    const addItem = (prod, quantity) => {
        setCarrito([...carrito, { item: prod, quantity: quantity }]);
    }
    const removeItem = (itemId) => {
        const deleteProduct = carrito.filter((prod) => prod.item.id !== itemId);
        setCarrito([...deleteProduct]);
        //console.log(‘cartcontext’, itemId);
    }
    const clear = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value={{ carrito, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}