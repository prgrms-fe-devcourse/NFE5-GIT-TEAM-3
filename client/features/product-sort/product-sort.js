/* global Swiper */

// 🔹 [1] 상품 데이터 정의
const products = [
  {
    id: 1,
    name: "야근 커피",
    price: 64000,
    txt: "개발자들을 위한 최고의 선택",
    img: "./product-sort/img/item01.webp",
    sold: 1,
    likes: 4.9,
  },
  {
    id: 2,
    name: "밤샘 초콜릿",
    price: 42000,
    txt: "밤샘 작업자 필수템!",
    img: "./product-sort/img/item02.webp",
    sold: 900,
    likes: 5.0,
  },
  {
    id: 3,
    name: "디버깅 에너지바",
    price: 23600,
    txt: "디버깅 집중력 UP!",
    img: "./product-sort/img/item03.webp",
    sold: 800,
    likes: 4.6,
  },
  {
    id: 4,
    name: "개발자용 안대",
    price: 11000,
    txt: "눈 피로 회복용 꿀템",
    img: "./product-sort/img/item04.webp",
    sold: 700,
    likes: 4.5,
  },
  {
    id: 5,
    name: "커피 머신",
    price: 90000,
    txt: "사무실에 딱 좋은 커피머신",
    img: "./product-sort/img/item05.webp",
    sold: 600,
    likes: 3.5,
  },
  {
    id: 6,
    name: "코드 스니펫 노트",
    price: 15000,
    txt: "아이디어 기록용 최고의 노트",
    img: "./product-sort/img/item01.webp",
    sold: 500,
    likes: 4.1,
  },
  {
    id: 7,
    name: "개발자용 티셔츠",
    price: 25000,
    txt: "스타일리시한 코딩 룩",
    img: "./product-sort/img/item01.webp",
    sold: 400,
    likes: 2.8,
  },
  {
    id: 8,
    name: "디버깅 도구 세트",
    price: 75000,
    txt: "하드코어 디버깅을 위한 세트",
    img: "./product-sort/img/item01.webp",
    sold: 300,
    likes: 3.6,
  },
  {
    id: 9,
    name: "스탠딩 데스크",
    price: 280000,
    txt: "허리를 지켜주는 스탠딩 책상",
    img: "./product-sort/img/item01.webp",
    sold: 200,
    likes: 4.4,
  },
  {
    id: 10,
    name: "블루라이트 차단 안경",
    price: 33000,
    txt: "눈 보호에 필수템!",
    img: "./product-sort/img/item01.webp",
    sold: 100,
    likes: 3.4,
  },
];

// 🔹 [2] DOM 요소 선택
const list = document.getElementById("productItems");
const buttons = document.querySelectorAll("#btn-wrap button");
const slide = document.getElementById("productSwiper");

// 🔹 [3] 상품 리스트 렌더링 함수
function renderProductList(data) {
  list.innerHTML = "";
  const limitedData = data.slice(0, 10); // 최대 10개만 출력

  limitedData.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
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
    list.appendChild(li);

  });
}

// 🔹 [4] 상품 정렬 함수
function sortProducts(type) {
  const sorted = [...products];

  if (type === "latest") {
    sorted.sort((a, b) => b.id - a.id); // 최신순: id가 높은 순
  } else if (type === "sold") {
    sorted.sort((a, b) => b.sold - a.sold); // 판매순: sold가 높은 순
  } else if (type === "likes") {
    sorted.sort((a, b) => b.likes - a.likes); // 인기순: likes 높은 순
  }

  renderProductList(sorted);
  card.className = 'product-card';
}

// 🔹 [5] 버튼 클릭 이벤트 처리
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("on"));
    this.classList.add("on");
    sortProducts(this.id);
  });
});

// 🔹 [6] 초기에 상품 리스트 표시
renderProductList(products);

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
slideProductList(products);
