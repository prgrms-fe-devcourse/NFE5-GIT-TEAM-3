
import { weeklyProducts, productList } from './jh.js'
import { createForm, handleOpenSurvey, initSurvey } from '../developer-survey/developer-survey.js'
import { handleMeme, hoverDetection } from '../easter-egg/easter-egg.js';

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.img}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
                <div class="action-icons">
                    <button class="action-btn wishlist-btn" onclick="addToWishlist(${product.id}, '${product.name}')">♥</button>
                    <button class="action-btn cart-btn" onclick="addToCart(${product.id}, '${product.name}')">🛒</button>
                    <button class="action-btn buy-btn" onclick="buyNow(${product.id}, '${product.name}')">💳</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price-card">${product.price}</div>
                <div class="product-rating">
                    <span class="stars">★★★★★</span>
                    <span>${product.rating}</span>
                    <span>(${product.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

// 알림 표시 함수
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 찜하기 기능
function addToWishlist(productId, productName) {
    showNotification(`${productName} 찜하기 완료!`, 'success');
}

// 장바구니 추가 기능
function addToCart(productId, productName) {
    showNotification(`${productName} 장바구니 추가 완료!`, 'info');
}

// 바로결제 기능
function buyNow(productId, productName) {
    showNotification(`${productName} 결제 창으로 이동합니다`, 'warning');
}



// 페이지 로드 시 상품 렌더링
document.addEventListener('DOMContentLoaded', function () {
    const weeklyContainer = document.getElementById('weeklyProducts');
    const productContainer = document.getElementById('productList');

    // 설문조사 폼 생성
    createForm();

    // 설문조사 이벤트 핸들러 등록
    handleOpenSurvey();

    // 초기화
    initSurvey();

    // 이주의 상품 렌더링
    weeklyProducts.forEach(product => {
        weeklyContainer.innerHTML += createProductCard(product);
    });

    // 상품 리스트 렌더링
    productList.forEach(product => {
        productContainer.innerHTML += createProductCard(product);
    });


    hoverDetection();
    handleMeme();
});