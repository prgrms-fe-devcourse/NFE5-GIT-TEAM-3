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
 * 상품 객체들의 배열을 받아 랜덤하게 섞어 반환
 * 
 * @param {Product[]}  순서를 섞을 상품 객체 배열
 * @returns {Product[]} 섞인 상품 객체 배열
 */
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 ~ i 중 랜덤
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}