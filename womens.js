
let womensData = [
  {
    image_url: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=600&q=80",
    name: "Women's Casual Shirt",
    category: "Shirts",
    price: 899,
    strikedoffprice: 1299,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    name: "Women's Everyday Top",
    category: "Tops",
    price: 599,
    strikedoffprice: 999,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    name: "Women's Straight Fit Jeans",
    category: "Jeans",
    price: 1199,
    strikedoffprice: 1799,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    name: "Women's Tailored Trousers",
    category: "Trousers",
    price: 1099,
    strikedoffprice: 1599,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    name: "Women's Elegant Dress",
    category: "Dresses",
    price: 1499,
    strikedoffprice: 2199,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    name: "Women's Casual T-Shirt",
    category: "Tops",
    price: 499,
    strikedoffprice: 799,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1548624149-f3236e4b4b4e?auto=format&fit=crop&w=600&q=80",
    name: "Women's Printed Dress",
    category: "Dresses",
    price: 1299,
    strikedoffprice: 1899,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80",
    name: "Women's Denim Jeans",
    category: "Jeans",
    price: 999,
    strikedoffprice: 1499,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
    name: "Women's Smart Shirt",
    category: "Shirts",
    price: 949,
    strikedoffprice: 1399,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    name: "Women's Party Wear Dress",
    category: "Dresses",
    price: 1799,
    strikedoffprice: 2499,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1506629905607-d9d9c7e3b3c1?auto=format&fit=crop&w=600&q=80",
    name: "Women's Casual Trousers",
    category: "Trousers",
    price: 899,
    strikedoffprice: 1299,
    brand: "StyleUp"
  },
  {
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    name: "Women's Everyday Outfit",
    category: "Casual Wear",
    price: 799,
    strikedoffprice: 1199,
    brand: "StyleUp"
  }
];


let productscont = document.getElementById("products");

let filterbrand = document.getElementById("filterbrand");

// let cartLS =JSON.parse(localStorage.getItem("cart-page"))||[]
let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
window.addEventListener('load', function () {
  cartItems()
})
function displayProducts(womensData) {
  productscont.innerHTML = "";

  womensData.forEach(function (element, index) {
    let product = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.image_url;

    let name = document.createElement("h5");
    name.innerText = element.name;
    // div for both price
    let pricediv = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = "Rs." + " " + element.price;

    let strikedoffprice = document.createElement("p");
    strikedoffprice.innerText = "   ₹." + " " + element.strikedoffprice;

    pricediv.append(price, strikedoffprice);

    let brand = document.createElement("p");
    brand.innerText = element.brand;

    let AddTocart = document.createElement("button");
    AddTocart.innerText = "Add To Cart";
    AddTocart.addEventListener("click", function(){
      AddTocartFun(element,index)
    })
    product.append(img, name, pricediv, brand, AddTocart);
    productscont.append(product);
  });
}
displayProducts(womensData);

filterbrand.addEventListener("change", function () {
  if (filterbrand.value === "All") {
    displayProducts(womensData);
  } else {
    let filtered = womensData.filter(function (element) {
      return element.brand === filterbrand.value;
    });
    displayProducts(filtered);
  }
});

function handlepricesort() {
  let sortprice = document.querySelector("#sortprice").value;
  
  if (sortprice == "LowToHigh") {
    let filter = womensData.sort(function (a, b) {
      return a.price - b.price;
    });
    displayProducts(filter);
  }
  if (sortprice == "HighToLow") {
    let filter = womensData.sort(function (a, b) {
      return b.price - a.price;
    });
    displayProducts(filter);
  }
}

function AddTocartFun(ele){
  let flag = false
for (let i = 0; i < cartArr.length; i++) {
  if (cartArr[i].name == ele.name) {
    cartArr[i].quantity++
    cartArr[i].cartprice = ele.price * cartArr[i].quantity
    flag = true
    alert(`Product ${ele.name} Added to Cart ${cartArr[i].quantity} Times`)
  }
}
if (!flag) {
  ele.quantity = 1
  ele.cartprice = ele.price * ele.quantity
  cartArr.push(ele)
  alert(`Product ${ele.name} Added to Cart Succesfuly`)
}
localStorage.setItem('cartData', JSON.stringify(cartArr))
cartItems()
}
function cartItems(){
  let temp = JSON.parse(localStorage.getItem('cartData')) || []
  let items=0
  temp.forEach(function(ele){
    items+=ele.quantity
  })
  document.getElementById("cart-items").innerText=items
}