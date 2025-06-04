// Martin Rotelli - Pre-Entrega

const URL = `https://fakestoreapi.com/products`

const fetchData = async (url) => {

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }

}

fetchData(URL)