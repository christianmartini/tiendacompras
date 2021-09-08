const producto = { id: 1, title: "Iphone como nuevo", price:38000, name: "iphone", model:'11', img:"https://static.toiimg.com/photo/71396840.cms" }

export const findItem = new Promise((resolve) => {
    setTimeout(() => {
         resolve(producto); //Tengo que buscar el ID correcto dentro de productos para solo devolver esos detalles.
     }, 2000);
    })