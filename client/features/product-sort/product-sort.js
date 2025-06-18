/* global Swiper */
import { getStorage } from "../storage.js";
import { addToWishlist, addToCart, buyNow } from "../floating-event.js";
import { handleMeme, hoverDetection } from "../easter-egg/easter-egg.js";

const KEY = 'products';

// 🔹 [2] DOM 요소 선택
const list = document.getElementById("productList");
const buttons = document.querySelectorAll("#btn-wrap button");
const slide = document.getElementById("productSwiper");
const allProducts = document.querySelector('#productList');

// 🔹 [6] 초기에 상품 리스트 표시
function getProductList(){
  const data = getStorage(KEY);
  return data;
}


// 🔹 [3] 상품 리스트 렌더링 함수
function renderProductList(data) {
  allProducts.innerHTML = ""; 
  const limitedData = data.slice(0, 10); // 최대 10개만 출력

  limitedData.forEach((item) => {
    const {id, name, price, img, txt, likes, reviews} = item;
    const div = document.createElement('div');
    const template = /* html */`
    <div class="product-card">
        <div class="product-image">
            <img src="${img}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
            <div class="action-icons">
                <button class="action-btn wishlist-btn">♥</button>
                <button class="action-btn cart-btn">🛒</button>
                <button class="action-btn buy-btn">💳</button>
            </div>
        </div>
      <div class="info">
          <span class="brand">${name}</span>
          <p class="txt">${txt}</p>
          <span class="price">${price.toLocaleString()}원</span>
          <div class="rating">
          <img src="./product-sort/img/star.on.png" alt="평점이미지" />
          <span>${likes.toFixed(1)}</span>
          <span>(${reviews})</span>
      </div>
    </div>
    `
    div.insertAdjacentHTML('beforeend',template);
    allProducts.insertAdjacentElement('beforeend', div);

    div.querySelector('.wishlist-btn').addEventListener('click', () => addToWishlist(id, name));
    div.querySelector('.cart-btn').addEventListener('click', () => addToCart(id, name));
    div.querySelector('.buy-btn').addEventListener('click', () => buyNow(id, name));
  });
}

// 🔹 [4] 상품 정렬 함수
function sortProducts(type) {
  const sorted = [...getProductList()];

  if (type === "latest") {
    sorted.sort((a, b) => b.id - a.id); // 최신순: id가 높은 순
  } else if (type === "sold") {
    sorted.sort((a, b) => b.sold - a.sold); // 판매순: sold가 높은 순
  } else if (type === "likes") {
    sorted.sort((a, b) => b.likes - a.likes); // 인기순: likes 높은 순
  }
  renderProductList(sorted);
}

// 🔹 [5] 버튼 클릭 이벤트 처리
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("on"));
    this.classList.add("on");
    sortProducts(this.id);
  });
});


renderProductList(getProductList());

// 🔹 [7] 슬라이드 상품 렌더링 + Swiper 초기화
function slideProductList(data) {
  const wrapper = slide.querySelector(".swiper-wrapper");
  wrapper.innerHTML = ""; // 기존 슬라이드 초기화

  data.slice(0, 5).forEach((item) => {
    const slideEl = document.createElement("div");
    slideEl.className = "swiper-slide";

    slideEl.innerHTML = `
      <figure class="img" style="background-image: url('${item.img}')"></figure>
      <div class="info">
        <span class="brand">${item.name}</span>
        <p class="txt">${item.txt}</p>
        <span class="price">${item.price.toLocaleString()}원</span>
        <div class="rating">
          <img src="./product-sort/img/star.on.png" alt="평점이미지" />
          <span>${item.likes.toFixed(1)}</span>
        </div>
      </div>
    `;

    wrapper.appendChild(slideEl);
  });

  // Swiper 슬라이드 초기화
  const swiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    loop: true,
  });
}

// 🔹 [8] 초기에 슬라이드 상품 표시
slideProductList(getProductList());
handleMeme();
hoverDetection();
