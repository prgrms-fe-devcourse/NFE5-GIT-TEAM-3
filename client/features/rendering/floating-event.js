/**
 * 위시 리스트 추가
 * 
 * @param {*} productId 추후 확장을 위한 파라미터
 * @param {string} productName 선택한 상품 이름
 * @returns {void}
 */
export function addToWishlist(productId, productName) {
    showNotification(`${productName} 찜하기 완료!`, 'success');
}

/**
 * 장바구니 추가
 * 
 * @param {*} productId 추후 확장을 위한 파라미터
 * @param {string} productName 선택한 상품 이름
 * @returns {void}
 */
export function addToCart(productId, productName) {
    showNotification(`${productName} 장바구니 추가 완료!`, 'info');
}

/**
 * 바로 결제 추가
 * 
 * @param {*} productId 추후 확장을 위한 파라미터
 * @param {string} productName 선택한 상품 이름
 * @returns {void}
 */
export function buyNow(productId, productName) {
    showNotification(`${productName} 결제 창으로 이동합니다`, 'warning');
}

/**
 * 알림 표시 함수
 * 
 * @param {string} message 상품 이름
 * @param {string} type 
 * @returns {void}
 */
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
