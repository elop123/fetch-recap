// write cool JS hwere!!
//## OPGAVE 1
const productsContainer = document.getElementById('productList');
const navBar = document.getElementById('navigation');

// Function to fetch all products from the API
async function fetchAllProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        displayProducts(allProducts);
        displayCategories(cat);
        console.log(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchAllProducts();

// Function to fetch a range of products from the API
async function getProducts(start, end) {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        const selectedProducts = allProducts.slice(start, end + 1);
        //displayProducts(selectedProducts);
        console.log(selectedProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Fetch products from index 10 to 20
getProducts(10, 20);


// Function to fetch products by category
async function getProductsByCategory(category) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
        const products = await response.json();
        //displayProducts(products);
        console.log(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
getProductsByCategory();

//

//## OPGAVE 2

// Function to display info about products
function displayProducts(products) {
    // Clear the current content
    productsContainer.innerHTML = '';

    // Iterate over the products and create HTML for each
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
        <fieldset>
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" width="100">
            <p>Description: ${product.description}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            <p>Price: $${product.price}</p>
        </fieldset>
        `;

        productsContainer.appendChild(productElement);
    });
}

// Get all categories
async function getAllCategories() {
                try {
                    const res = await fetch('https://fakestoreapi.com/products/categories');
                    const allCategories = await res.json();
                    displayCategories(allCategories);
                    console.log(allCategories);
                } catch (error) {
                    console.error('Error fetching categories:', error);
                }
            }
getAllCategories();

//Display All categories

function displayCategories(cat) {
    // Clear the current content
    navBar.innerHTML = '';

    // Iterate over the categories and create list items for each
    cat.forEach(category => {
        const ulElement = document.createElement('ul');
        
        ulElement.innerHTML = `<li> <p>${category}</p> </li>`;

       navBar.appendChild(ulElement);
    });
}
