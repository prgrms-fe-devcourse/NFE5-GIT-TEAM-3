import * as testProducts from './testProducts.js';



const memes = [
  '이게 안 되네…? 이게 되네…?',
  '제 pc 에서는 됩니다.',
  '되는데요?',
  '구현 가능함?',
  '머지? 머지는 합병입니다.',
  '됐었는데 안됩니다.',
  '오늘도 개발자가 ‘안 된다’고 말했다',
  '집에 갈래 -> 안돼 / sudo 집에 갈래 -> 그래',
  '일단 작동하면 건드리지 마라',
  'html도 프로그래밍 언어입니다',
];

let currentHover = null;




//상품들을 반복해서 화면에 렌더링
function renderTestProducts() {
  const container = document.createElement('div');
  container.id = 'product-container';
  document.body.appendChild(container);


  Object.values(testProducts).forEach(product => {
    const section = document.querySelector(`section.${product.category}`);
    if (!section) return; // 해당 섹션 없으면 무시

    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <p>${product.name}</p>
    `;

    section.appendChild(card); // 해당 섹션에 카드 추가
  });

  console.log('렌더링 시작');
  
}


function hoverDetection(){
  const products = document.querySelectorAll('.product-card');

  products.forEach(card => {
    card.addEventListener('mouseenter',()=>{
      currentHover = card;
    });

    card.addEventListener('mouseleave',()=>{
      currentHover = null;
    });

  })
}


function handleMeme(){
  document.addEventListener('keydown', (e) => {
  if (e.key === 'd'&& currentHover) {
    const memeText = memes[Math.floor(Math.random()*memes.length)];

    //이미 밈이 있으면 제거
    const exist = currentHover.querySelector('.meme');
    if(exist) exist.remove();

    //새 밈 요소 생성
    const meme = document.createElement('div');
    meme.className = 'meme';
    meme.textContent = memeText;

    currentHover.appendChild(meme);

    //효과음 재생
    playMemeSound();

    //일정시간 후 사라지기
    setTimeout(()=>{
      meme.remove();
    },2000);
  }
});
}

//효과음 재생 함수
function playMemeSound(){
  const audio = document.getElementById('meme-audio');

  audio.currentTime = 0;
  audio.play();
}


renderTestProducts();
hoverDetection();
handleMeme();

console.log('%c。　♡ 。　　♡。　　♡', 'color: pink; font-size: 16px;');
console.log('%c♡。　＼　　｜　　／。　♡', 'color: orange; font-size: 16px;');
console.log('%c\tdevMart 짱', 'color: gold; font-size: 18px; font-weight: bold;');
console.log('%c♡。　／　　｜　　＼。　♡', 'color: orange; font-size: 16px;');
console.log('%c。　♡。 　　。　　♡。', 'color: pink; font-size: 16px;');