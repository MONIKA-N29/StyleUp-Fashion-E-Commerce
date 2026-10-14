
/* =========================================
   STYLEUP — HOMEPAGE FUNCTIONALITY
   Modern fashion banners, product grids and cart
========================================= */

window.addEventListener("load", function () {
    cartItems();
});

/* -----------------------------------------
   CAROUSEL 1 — STYLEUP FASHION CAMPAIGN
----------------------------------------- */

const carouselImages1 = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85"
];

let carouselIndex1 = 0;

function changeCarousel1(direction) {
    const image = document.getElementById("image_url");
    if (!image) return;

    carouselIndex1 =
        (carouselIndex1 + direction + carouselImages1.length) %
        carouselImages1.length;

    image.src = carouselImages1[carouselIndex1];
}

const previousButton1 = document.querySelector(".prev");
const nextButton1 = document.querySelector(".next");

if (previousButton1) {
    previousButton1.addEventListener("click", function () {
        changeCarousel1(-1);
    });
}

if (nextButton1) {
    nextButton1.addEventListener("click", function () {
        changeCarousel1(1);
    });
}

/* -----------------------------------------
   CAROUSEL 2 — NEW SEASON COLLECTION
----------------------------------------- */

const carouselImages2 = [
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=85"
];

let carouselIndex2 = 0;

function changeCarousel2(direction) {
    const image = document.getElementById("image2_url");
    if (!image) return;

    carouselIndex2 =
        (carouselIndex2 + direction + carouselImages2.length) %
        carouselImages2.length;

    image.src = carouselImages2[carouselIndex2];
}

const previousButton2 = document.querySelector(".prev1");
const nextButton2 = document.querySelector(".next1");

if (previousButton2) {
    previousButton2.addEventListener("click", function () {
        changeCarousel2(-1);
    });
}

if (nextButton2) {
    nextButton2.addEventListener("click", function () {
        changeCarousel2(1);
    });
}

/* -----------------------------------------
   HOMEPAGE PRODUCT IMAGE COLLECTIONS
----------------------------------------- */

const products_grid1 = [
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/88c205c0-2349-4669-9d5b-6405e992b06e1654411440468-image_jpeg8576396.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/ac58b269-49f0-4df6-8e6c-594ff77ee4fd1652964575134-Bed_Linen_and_Furnishing_Min_60_-Story-home_-_Cortina-.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/42f7a82e-e84a-4fb9-9cca-55264b28807c1654411495335-image_png_71119225.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/a92b7453-33c0-4647-acf1-b3f714f5b7a51654411511670-image_png_1947551086.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/db7f6d21-887c-4b73-951a-9c2c6e0f72361654411580266-image_png518016767.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/6cba5e10-9064-48a3-a7f3-44f868eb953b1654411595064-image_png1749342016.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/3293d206-5c8e-46fd-941c-645afabe0fa81654411618745-image_png_1639462581.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/49d6e51c-6bf7-4bb8-a7ef-86616f750b2d1654411638152-image_png_79518292.png"
];

const products_grid2 = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/48f59438-2806-47c5-bc44-e6b6882865c71653643704628-QL_Watches.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2d883965-5d34-4bf8-99e2-b263c8920d651653643704260-QL_GroomingEssentials.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/306481ec-1b07-46a5-81f9-210fa4ee21481653643704251-QL_Fragrances.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/77eee7e0-9638-4ddc-8726-b0ea0f9d9d591653643704145-QL_ActivewearW.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d3d0683b-3616-40c4-89d8-5fd3273ac80d1653643704226-QL_Flip-Flops.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9c3501e3-22b0-47b0-b60a-2de70f3c8f951653643704178-QL_Bras_Briefs.jpg"
];

/* -----------------------------------------
   CREATE PRODUCT IMAGE GRIDS
----------------------------------------- */

function addProductsGrid(imageList, gridElement) {
    if (!gridElement || !Array.isArray(imageList)) return;

    gridElement.innerHTML = "";

    imageList.forEach(function (imageURL, index) {
        const card = document.createElement("div");
        card.className = "styleup-category-card";

        const image = document.createElement("img");
        image.src = imageURL;
        image.alt = "Explore StyleUp collection " + (index + 1);
        image.loading = "lazy";

        image.addEventListener("error", function () {
            card.classList.add("image-unavailable");
        });

        card.appendChild(image);
        gridElement.appendChild(card);
    });
}

const grid1 = document.getElementById("products_grid1");
const grid2 = document.getElementById("products_grid2");

addProductsGrid(products_grid1, grid1);
addProductsGrid(products_grid2, grid2);

/* -----------------------------------------
   CART ITEM COUNT
----------------------------------------- */

function cartItems() {
    const cartCount = document.getElementById("cart-items");
    if (!cartCount) return;

    let cartData = [];

    try {
        cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    } catch (error) {
        console.warn("Could not read cart data from local storage.", error);
    }

    const totalItems = cartData.reduce(function (total, item) {
        return total + (Number(item.quantity) || 0);
    }, 0);

    cartCount.textContent = totalItems;
}
