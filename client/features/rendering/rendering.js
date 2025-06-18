import { getStorage } from "../storage.js";
import { addToWishlist, addToCart, buyNow } from "./floating-event.js";
import { handleMeme, handlehoverDetection } from "../easter-egg/easter-egg.js";

const PRODUCTS_KEY = 'products';

/**
 * @typedef {Object} Product
 * @property {string} id - 상품 아이디
 * @property {string} name - 상품 이름
 * @property {number} price - 상품 가격
 * @property {string[]} recommendedRole - 추천 직군
 * @property {string[]} recommendedEnv - 추천 근무 환경
 * @property {string[]} recommendedShift - 추천 근무 시간대
 * @property {string} txt - 설명 텍스트
 * @property {number} sold - 판매 수
 * @property {number} likes - 좋아요 수
 * @property {number} reviews - 리뷰 수
 * @property {string[]} category
 */



/**
 * Local Storage 상품 가져오기
 * 
 * @returns {Product[]} local에서 가져온 데이터
 */
function getProductList(){
  const data = getStorage(PRODUCTS_KEY);
  return data;
}

/**
 * 단일 상품 엘리먼트 생성
 * 
 * @param {Object} product - 상품 정보
 * @param {string} product.name - 상품 이름
 * @param {number} product.price - 상품 가격
 * @param {string} product.img - 이미지 경로
 * @param {string} product.txt - 설명 텍스트
 * @param {number} product.likes - 좋아요 수
 * @param {number} product.reviews - 리뷰 수
 * @returns {string} 상품을 표현하는 HTML 문자열
 */
function getProductTemplate({ name, price, img, txt, likes, reviews }) {
    return /* html */`
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
}

/**
 * 단일 상품에 대하여 찜, 장바구니, 바로결제 이벤트 등록
 * 
 * @param {HTMLElement} productElement - 이벤트를 등록할 상품 DOM 요소
 * @param {{ id: string, name: string }} productInfo - 이벤트에 필요한 상품 정보
 * @returns {void}
 */
function bindProductEvents(productElement, { id, name }) {
    productElement.querySelector('.wishlist-btn')?.addEventListener('click', () => addToWishlist(id, name));
    productElement.querySelector('.cart-btn')?.addEventListener('click', () => addToCart(id, name));
    productElement.querySelector('.buy-btn')?.addEventListener('click', () => buyNow(id, name));
}


/**
 * 단일 상품 생성
 * 
 * @param {Product} product - 상품 정보 객체
 * @returns {HTMLElement} 생성된 상품 엘리먼트
 */
export function createProduct(product) {
    const div = document.createElement('div');
    const template = getProductTemplate(product);
    div.insertAdjacentHTML('beforeend', template);
    bindProductEvents(div, product)
    return div;
}

/**
 * 카테고리별 상품 렌더링
 * 
 * @param {Product[]} products 렌더링할 상품 리스트
 * @returns {void}
 */
function renderCategoryProducts(products) {
    products.forEach(product => {
        const card = createProduct(product);
        const category = product.category;
        // if (!Array.isArray(category)) return;

        category.forEach(c => {
            const target = document.querySelector(`.product-grid.${c}`);
            if (target) {
                const card = createProduct(product); // ✅ 매번 새로 생성
                target.insertAdjacentElement('beforeend', card);
            }
        });
    });
}

/**
 * 카테고리 상품 랜더링 핸들러
 * 
 * @returns {void}
 */
function handleCategoryProducts(){
    console.log(getProductList());

    renderCategoryProducts(getProductList());
}


/**
 * 페이지 로드 시 카테고리별 상품 렌더링
 */
document.addEventListener('DOMContentLoaded', function () {
    // 영역별 상품 렌더링
    handleCategoryProducts();

    handleMeme();

    handlehoverDetection();
});

