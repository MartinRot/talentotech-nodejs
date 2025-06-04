// Martin Rotelli - Pre-Entrega

const [, , method, path, ...rest] = process.argv;

const URL = "https://fakestoreapi.com/products";

// Fetch para traer datos de la url pasada por parametro
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }
};

// Envía una solicitud POST a la URL pasador por paramentro con el cuerpo (body) proporcionado en formato JSON.
const postData = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
        const data = await response.json();
        console.log("Producto creado:", data);
    } catch (error) {
        console.error("Error al crear producto:", error.message);
    }
};

// Envía una solicitud DELETE a la URL pasada por parametro para eliminar un producto
const deleteData = async (url) => {
    try {
        const response = await fetch(url, { method: "DELETE" });
        const data = await response.json();
        console.log("Producto eliminado:", data);
    } catch (error) {
        console.error("Error al eliminar producto:", error.message);
    }
};

 // Manejador de las solicitudes GET segun la ruta para obtener productos
const handleGET = () => {

    if (path === "products") {
        //si la ruta es "products" muestra todos los productos
        fetchData(URL);
    } else if (path.startsWith("products/")) {
        //Si la ruta es "products/<id>"  muestra los productos con esa id
        const [, id] = path.split("/");
        fetchData(`${URL}/${id}`);

    } else {
        console.log("Ruta GET no reconocida");
    }
};

// Manejador de las solicitudes POST para crear un nuevo producto
const handlePOST = () => {
    if (path === "products") {
        const [title, price, category] = rest;        

    const newProduct = {
        title,
        price: parseFloat(price),
        category,
    };

    postData(URL, newProduct);
    
    } else {
        console.log("Ruta POST no reconocida");
    }
};

// Manejador de las solicitudes DELETE para eliminar productos
const handleDELETE = () => {
    if (path.startsWith("products/")) {
        // Verifica que la ruta comience con "products/" y extrae el ID del producto.
        const [, id] = path.split("/");
    if (!id) {
        // Si no encuentra el id muestra un mensaje
        console.log("Debes proporcionar un ID");
    } else {
        deleteData(`${URL}/${id}`);
    }
    } else {
        console.log("Ruta DELETE no reconocida");
    }
};

// Controlador que ejecuta la funcion que corresponde segun el metodo HTTP recibido
switch (method) {
    case "GET":
        handleGET(); //Obtener productos
    break;
    case "POST":
        handlePOST(); //Crear un nuevo producto.
    break;
    case "DELETE":
        handleDELETE(); //Eliminar un producto.
    break;
}   
