# devMart
## 🛒 devMart

- 사용자는 **개발자 상품을 탐색**하고, **찜**, **장바구니 담기**, **바로 결제** 기능을 이용할 수 있습니다.  
- **개발자 유형 테스트**를 통해 **추천 아이템**을 확인할 수 있습니다.  
- **단축키를 활용한 이스터에그**로 숨겨진 밈 콘텐츠를 즐길 수 있습니다.  
- **상품 리스트 정렬 기능**(최신순, 인기순, 구매순)과 **좌측 카테고리 필터**, **플로팅 버튼** 등 다양한 UI 기능을 제공합니다.  

## 🗂️ 프로젝트 구조
```
/devMart
│
├── /client 
│ ├── /assets 
│ │ ├── /images
| | | ├── /easter-egg
| | | └── /product-image-removebg
| | |
│ │ └── /sounds 
│ │
│ ├── /features  주요 기능별 모듈
│ │ ├── /change-theme         # 테마 전환 기능
│ │ ├── /developer-survey     # 개발자 유형 테스트
│ │ ├── /easter-egg           # 밈 이스터에그
│ │ ├── /navigation           # 좌측 내비게이션 메뉴
│ │ ├── /product-sort         # 상품 정렬 기능
│ │ ├── /rendering            # 상품 리스트 렌더링 관련 기능
│ │ ├── products.js           # 상품 데이터 정의
│ │ ├── shuffle-products.js   # 상품 무작위 정렬 함수
│ │ └── storage.js            # localStorage 제어
│ │
│ │
│ ├── index.html 
│ ├── main.js 
│ ├── reset.css
│ └── style.css 
│
├── /node_modules 
│
├── .gitignore 
├── .prettierrc.cjs 
├── eslint.config.mjs 
├── package-lock.json 
├── package.json 
└── README.md 

```

## 💫 주요 기능

- 🛒 플로팅 버튼을 통한 **상품 찜하기 / 장바구니 담기 / 바로 결제 기능**
- 🧩 **개발자 유형 테스트**로 **추천** 아이템 확인
- 🎮 **단축키를 이용한 이스터에그(밈) 출력**
- 🗂️ **카테고리 필터 및 상품 정렬 기능** 제공
- 🧭 **좌측 네비게이션을 통한 섹션 이동**
- 🌓 **다크 모드** 지원
- 💾 **로컬스토리지를 통한 데이터 저장**
- 📱 **반응형 웹사이트**
- ⚙ **웹 접근성 향상**

## 🚀 시작하는 방법

1. 프로젝트 실행 전, 터미널에서 아래 명령어를 입력해 주세요.  
   (※ `npm`이 설치되어 있어야 합니다.)
    
    ```bash
    npm install    # 최초 1회 패키지 내용 설치
    npm run dev    # 클라이언트 실행
    ```

2. [배포링크](https://dev-mart3.vercel.app/)로도 접속하실 수 있습니다.

## 👣 유저 플로우
![Image](https://github.com/user-attachments/assets/b7312980-7573-49c7-8f5d-b9afb559964b)
## 🧱 구조도 및 협업툴
![Image](https://github.com/user-attachments/assets/9f871e53-64b2-4a71-8123-71b8be7a2498)
## 📷 미리보기
![스크린샷 2025-06-20 170912](https://github.com/user-attachments/assets/74546d07-3046-4e60-a20d-87767194debf)
![스크린샷 2025-06-20 174432](https://github.com/user-attachments/assets/769c6b50-531a-484a-b232-bbc330610f14)
![스크린샷 2025-06-20 170958](https://github.com/user-attachments/assets/21f1152f-f5f3-4771-b8d8-b5e35a5ae0d0)
![스크린샷 2025-06-20 172646](https://github.com/user-attachments/assets/23eaf3ff-cd47-404c-986f-1c703d45e326)
## 👨‍💻 팀원

| 변지현 | 신민석 | 이소민 | 이승은 | 황유정 |
| --- | --- | --- | --- | --- |
| ![image](https://github.com/user-attachments/assets/165fef2f-8029-4ada-ab66-50aa57615c48)| ![image](https://github.com/user-attachments/assets/bd8090b7-1fc3-4c1d-8714-a4133058842b)| ![Image](https://github.com/user-attachments/assets/f70a3bf5-30e3-4908-8c1c-34f6fe54a531) | ![Image](https://github.com/user-attachments/assets/6a2dbd4b-0ab9-4836-83bf-6e73bc761c0d) | ![Image](https://github.com/user-attachments/assets/22ac8949-8279-463f-84a5-8b2b9404c123) |
| FE | FE | FE | FE | FE |
| [GitHub](https://github.com/jihyun9912) | [GitHub](https://github.com/msshin99) | [GitHub](https://github.com/mintsky0172) | [GitHub](https://github.com/seungdev) | [GitHub](https://github.com/YooJeong01) |

이승은
황유정
