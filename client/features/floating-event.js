// 찜하기 기능
export function addToWishlist(productId, productName) {
    showNotification(`${productName} 찜하기 완료!`, 'success');
}

// 장바구니 추가 기능
export function addToCart(productId, productName) {
    showNotification(`${productName} 장바구니 추가 완료!`, 'info');
}

// 바로결제 기능
export function buyNow(productId, productName) {
    showNotification(`${productName} 결제 창으로 이동합니다`, 'warning');
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
