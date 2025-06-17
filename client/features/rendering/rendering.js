import { getStorage } from "../storage.js";
import { addToWishlist, addToCart, buyNow } from "../floating-event.js";
import { createForm, handleOpenSurvey, initSurvey } from '../developer-survey/developer-survey.js'

const KEY = 'products';

function getProductList(){
  const data = getStorage(KEY);
  return data;
}

function renderItem({id, name, price, img, txt, likes, reviews, category}) {
    const parent = category;

    parent.forEach((p) => {
        const parentNode = document.querySelector(`div.${p}`);

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
        </div>
        `;

        div.insertAdjacentHTML('beforeend',template);
        parentNode.insertAdjacentElement('beforeend', div);

        div.querySelector('.wishlist-btn').addEventListener('click', () => addToWishlist(id, name));
        div.querySelector('.cart-btn').addEventListener('click', () => addToCart(id, name));
        div.querySelector('.buy-btn').addEventListener('click', () => buyNow(id, name));
    });
}


function createProductList(){
    const products = getProductList();
    products.forEach((product)=>{
        renderItem(product);
    })
}


// 페이지 로드 시 상품 렌더링
document.addEventListener('DOMContentLoaded', function () {
    // 설문조사 폼 생성
    createForm();

    // 설문조사 이벤트 핸들러 등록
    handleOpenSurvey();

    // 초기화
    initSurvey();

    // 영역별 상품 렌더링
    createProductList();
});

