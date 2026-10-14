let mensData = [
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/7/799267-9419170.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
        price: 1170, type: 'shoes', strikedoffprice: 2599, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/800134-9439268.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
        price: 699, type: 'flips', strikedoffprice: 999, brand: 'Reebok'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/858824-10117944.jpg?auto=format&w=400.625',
        name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
        price: 945, type: 'shoes', strikedoffprice: 2099, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/800131-9439174.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
        price: 399, type: 'flips', strikedoffprice: 799, brand: 'Reebok'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/816443-9752419.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
        price: 1620, type: 'shoes', strikedoffprice: 3599, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/859613-10138560.jpg?auto=format&w=400.625 ',
        name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
        price: 1440, type: 'shoes', strikedoffprice: 3199, brand: 'Reebok'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/7/798014-9391960.jpg?auto=format&w=400.625 ',
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
        price: 1999, type: 'pants', strikedoffprice: 3199, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/7/767093-8811900.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
        price: 769, type: 'tshirts', strikedoffprice: 1099, brand: 'Reebok'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/others/cat_1x1.png',
        name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
        price: 1299, type: 'tshirts', strikedoffprice: 1440, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/800135-9439310.jpg?auto=format&w=400.625',
        name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
        price: 699, type: 'flips', strikedoffprice: 999, brand: 'Reebok'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/858903-10119042.jpg?auto=format&w=400.625 ',
        name: "MEN'S REEBOK RUNNING RUN SHOES  ",
        price: 1620, type: 'shoes', strikedoffprice: 3599, brand: 'Addidas'
    },
    {
        image_url: 'https://imagescdn.reebok.in/img/app/product/8/816442-9752385.jpg?auto=format&w=400.625 ',
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
        price: 1620, type: 'shoes', strikedoffprice: 3599, brand: 'Reebok'
    }
];

/* CART DATA */
let cartData = JSON.parse(localStorage.getItem('cartData')) || [];

window.addEventListener('load', function () {
    cartItems();
});

/* STYLEUP BURGUNDY-CREAM NOTIFICATION */
function showStyleUpNotification(message) {
    let notification = document.getElementById('styleup-notification');

    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'styleup-notification';

        Object.assign(notification.style, {
            position: 'fixed',
            top: '25px',
            right: '25px',
            backgroundColor: '#faf7f3',
            color: '#51202d',
            border: '1px solid #e4d8d2',
            borderLeft: '5px solid #742c40',
            padding: '16px 22px',
            borderRadius: '8px',
            boxShadow: '0 5px 18px rgba(81,32,45,0.18)',
            zIndex: '99999',
            fontSize: '14px',
            fontWeight: '600',
            maxWidth: '350px',
            lineHeight: '1.5'
        });

        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.style.display = 'block';

    clearTimeout(window.styleUpNotificationTimer);

    window.styleUpNotificationTimer = setTimeout(function () {
        notification.style.display = 'none';
    }, 3000);
}

/* DISPLAY PRODUCTS */
function displayPage(data) {
    const container = document.querySelector('#Right-section');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let element = data[i];

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src', element.image_url);

        let brand = document.createElement('h2');
        brand.innerText = element.brand;
        brand.setAttribute('id', 'brand');

        let name = document.createElement('p');
        name.innerText = element.name;

        let price = document.createElement('span');
        price.innerText = 'Rs ' + element.price;
        price.setAttribute('id', 'price');

        let sprice = document.createElement('span');
        sprice.innerText = element.strikedoffprice;
        sprice.setAttribute('id', 'sprice');

        let addtocart = document.createElement('button');
        addtocart.innerText = 'Add to Cart';
        addtocart.setAttribute('id', 'addtocart');

        addtocart.addEventListener('click', function () {
            addToCart(element);
        });

        div.append(img, brand, name, price, sprice, addtocart);
        container.append(div);
    }
}

displayPage(mensData);

/* ADD TO CART */
function addToCart(product) {
    let existingProduct = cartData.find(function (item) {
        return item.name === product.name;
    });

    if (existingProduct) {
        existingProduct.quantity = (Number(existingProduct.quantity) || 0) + 1;
        existingProduct.cartprice = product.price * existingProduct.quantity;

        showStyleUpNotification(
            `${product.name} — quantity: ${existingProduct.quantity}`
        );
    } else {
        let cartProduct = { ...product };
        cartProduct.quantity = 1;
        cartProduct.cartprice = cartProduct.price;

        cartData.push(cartProduct);

        showStyleUpNotification(
            `${product.name} added to your cart!`
        );
    }

    localStorage.setItem('cartData', JSON.stringify(cartData));
    cartItems();
}

/* SORT BY PRICE */
let sortbyprice = document.querySelector('#pricesort');

if (sortbyprice) {
    sortbyprice.addEventListener('change', function () {
        sortByPrice(mensData);
    });
}

function sortByPrice(data) {
    let val = document.querySelector('#pricesort').value;

    if (val === 'Low to High') {
        displayPage([...data].sort((a, b) => a.price - b.price));
    } else if (val === 'High to Low') {
        displayPage([...data].sort((a, b) => b.price - a.price));
    }
}

/* SORT BY NAME */
let sortbyname = document.querySelector('#namesort');

if (sortbyname) {
    sortbyname.addEventListener('change', function () {
        sortByName(mensData);
    });
}

function sortByName(data) {
    let val = document.querySelector('#namesort').value;

    if (val === 'Ascending') {
        displayPage([...data].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (val === 'Descending') {
        displayPage([...data].sort((a, b) => b.name.localeCompare(a.name)));
    }
}

/* TOTAL ITEMS */
function totalItems(data) {
    let count = document.querySelector('#count');
    if (count) count.innerText = data.length;
}

totalItems(mensData);

/* CATEGORY FILTERS */
function setupCategoryFilter(id, type) {
    let checkbox = document.querySelector('#' + id);
    if (!checkbox) return;

    checkbox.addEventListener('click', function () {
        let filtered = checkbox.checked
            ? mensData.filter(item => item.type === type)
            : mensData;

        displayPage(filtered);
        totalItems(filtered);
    });
}

setupCategoryFilter('tshirts', 'tshirts');
setupCategoryFilter('shoes', 'shoes');
setupCategoryFilter('flips', 'flips');
setupCategoryFilter('pants', 'pants');
setupCategoryFilter('bags', 'bags');

/* PRICE FILTERS */
function setupPriceFilter(id, min, max) {
    let checkbox = document.querySelector('#' + id);
    if (!checkbox) return;

    checkbox.addEventListener('click', function () {
        let filtered = checkbox.checked
            ? mensData.filter(item => item.price >= min && item.price <= max)
            : mensData;

        displayPage(filtered);
        totalItems(filtered);
    });
}

setupPriceFilter('one', 100, 400);
setupPriceFilter('two', 401, 1000);
setupPriceFilter('three', 1001, 5000);
setupPriceFilter('four', 5001, 10000);

/* CART ITEM COUNT */
function cartItems() {
    let temp = [];

    try {
        temp = JSON.parse(localStorage.getItem('cartData')) || [];
    } catch (error) {
        temp = [];
    }

    let items = temp.reduce(function (total, item) {
        return total + (Number(item.quantity) || 0);
    }, 0);

    let cartCount = document.getElementById('cart-items');

    if (cartCount) {
        cartCount.innerText = items;
    }
}