/**
 * local에서 survey 값 가져오기
 * local에서 products 값 가져오기
 * local이 초기 로딩일경우 products 배열 생성해주기 init()
 * includes나 filter 등을 통해서 survey를 기준으로 해당되는 products있는지 확인하기
 * 새로운 리스트로 값을 담고
 * 그 리스트를 화면에 렌더링하기
 * survey 결과 값이 바뀔때마다 재 추천해줘야함
 */

import { getStorage, setStorage } from "./storage.js";
const SURVEY_KEY = 'survey';
const PRODUCTS_KEY = 'products';

/**
 * 설문조사 결과에 따른 상품 추천
 * - 설문조사 결과와 local stroage에 있는 상품을 비교
 * - 추천용 프로퍼티(recommendedRole, recommendedEnv, recommendedShift)의 값들이 설문조사 결과를 포함한다면 추천 아이템에 반영
 * 
 * @returns {array} 추천된 상품 배열
 */
function getRecomdedProducts(){
    const {role, workEnvironment, workShift} = getStorage(SURVEY_KEY); // 개발자 설문조사 결과
    const products =  getStorage(PRODUCTS_KEY); // local storage에 등록된 상품들 가져오기

    const recommendedProducts = new Set(); // 중복 방지를 위해 set 자료형 사용
    products.forEach((product)=>{ 
        const {recommendedRole, recommendedEnv, recommendedShift } = product;
        
        // 개발자 설문조사 결과에 나온 키워드들을 하나의 배열로 만들고 
        // 해당 키워드가 존재하는 상품이 있다면 추천상품에 넣기
        [...role, ...workEnvironment, ...workShift].forEach((i) => {
            if (recommendedRole.includes(i) || recommendedEnv.includes(i) || recommendedShift.includes(i)) {
                recommendedProducts.add(product);
            }
        });
    })
    
    return Array.from(recommendedProducts);
}



/**
 * 추천된 상품의 html 태그 생성 및 렌더링 함수
 */
export function createRecommendedProducts() {
    const recommendedSection = document.querySelector('.recommended-products');
    recommendedSection.replaceChildren();
    const recommendedProducts = getRecomdedProducts();
    console.log(recommendedProducts);
    recommendedProducts.forEach((recommendedProduct)=>{
        const {id, name, price, img} = recommendedProduct;
        // const product = document.createElement('div');

        // product.setAttribute('class','product');

        // const productImg = document.createElement('img');
        // productImg.setAttribute('class','product-img');
        // productImg.setAttribute('src', img);
        // productImg.setAttribute('alt', `${name} 상품 사진`);

        // const productName = document.createElement('div');
        // productName.setAttribute('class','product-name');
        // productName.textContent = name;

        // const productPrice = document.createElement('div');
        // productPrice.setAttribute('class','product-price');
        // productPrice.textContent = price;

        // product.append(productImg, productName, productPrice);
        // recommendedSection.append(product);
        const template = /*html*/`
            <div class="product">
                <img class="product-img" src="${img}" alt="${name} 상품 사진" />
                <div class="product-name">${name}</div>
                <div class="product-price">${price}</div>
            </div>
        `
        recommendedSection.insertAdjacentHTML('beforeend',template);
    })
}

initRecommendedProducts();

/**
 * 추천상품 init
 * - 저장된 값 불러오기
 * - 처음이라면 빈 배열 생성
 */
function initRecommendedProducts() {
    let data = getStorage(PRODUCTS_KEY)
    if(!data) {
        data = [];
        setStorage(PRODUCTS_KEY, data);
    }
}




