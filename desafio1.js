class ProductManager{

    constructor(){
        this.productos = [];
        this.nuevoId = 0;
    }

    agregarProducto(titulo, descripcion, precio, thumbnail, id, stock){        
        if(!titulo || !descripcion || !precio || !thumbnail || !id || !stock){
            console.log("Todos los campos son requeridos");            
        } const nuevoId = this.productos.find((producto) => producto.id === id);
            if (nuevoId) {
                console.log("Ese producto ya existe");
            }else{     
                const producto = {
                    titulo,
                    descripcion,
                    precio,
                    thumbnail,
                    id: this.creaNuevoId(),
                    stock,
                };
                this.productos.push(producto)
        }
    
    }

    creaNuevoId(){        
        return ++ this.nuevoId
    }
    
    mostrarProductos(){
        return this.productos;
    }
    
    buscarProductoId(idBuscado){
        let buscar = this.productos.find((busc) => busc.id===idBuscado)
        if (buscar){
            console.log("Producto almacenado: " , buscar);
        }else{
            console.log("Producto no encontrado");
        }
    }
}

const productoNuevo = new ProductManager
console.log("Productos cargados hasta el momento: " , productoNuevo.productos);

productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 1, 10)
productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 2, 10)
productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 3, 10)
productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 4, 10)
productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 5, 10)
productoNuevo.agregarProducto("iPhone", "El mejor teléfono inteligente", 1000, "img/iphone.jpg", 6, 10)

console.log("Productos cargados hasta el momento: " , productoNuevo.productos);
productoNuevo.buscarProductoId(3); //Buscar producto por ID (producto encontrado)
productoNuevo.buscarProductoId(8); //Buscar producto por ID (producto NO encontrado)