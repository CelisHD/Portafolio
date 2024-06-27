function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Verificar si el parámetro "registro_exitoso" está presente en la URL
var registroExitoso = getParameterByName('registro_exitoso');
if (registroExitoso === 'true') {
    // Mostrar un mensaje de alerta si el registro fue exitoso
    alert('¡Registro Exitoso!');
}

const products = [
    { id: 1, name: 'BMW 650cc Negra', price: 1500000 , image: 'BMW-650-negra.jpeg' },
    { id: 2, name: 'Kawasaki 650cc Gris', price: 2000000, image: 'Kawasaki-650-gris.jpeg' },
    { id: 3, name: 'Kawasaki 650cc Verde ', price: 1800000, image: 'Kawasaki-verde-urbana.jpeg' },
    { id: 4, name: 'Ninja Verde', price: 4600000, image: 'Ninja Verde.jpeg' },
    { id: 5, name: 'Yamaha R15', price: 3200000, image: 'Yamaha R15 Azul.jpeg' },
    { id: 6, name: 'Yamaha Semi deportiva Azul', price: 6400000, image: 'Yamaha-semi-deportiva-azul.jpeg' },
];

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');

function renderProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="img/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Por ahora, simplemente actualizamos el contador en el carrito
    let count = parseInt(cartCount.innerText);
    count++;
    cartCount.innerText = count;
}

// Renderizamos los productos cuando la página carga
window.onload = renderProducts;
