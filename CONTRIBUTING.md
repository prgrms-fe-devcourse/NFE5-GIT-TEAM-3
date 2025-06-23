# 명명 규칙

# 파일 & 폴더 구조 명명 규칙

| 구분 | 규칙 | 예시 |
| --- | --- | --- |
| 폴더명 | 케밥케이스 | `/product-list`, `/self-test` |
| 파일명 | 케밥케이스 | `product-list.js`, `product-card.js` |
| 공통 스타일 | `style.css` |  |

# 변수명 & 함수명 명명 규칙

| 영역 | 명명 규칙 | 예시 |
| --- | --- | --- |
| JS 함수명 | 카멜케이스 | `renderProductList()` |
| JS 변수명 | 카멜케이스 | `productListArray` |
| Boolean 변수 | is/has/can + 카멜케이스 | `isActive` |
| HTML class / id | 케밥케이스 | `product-list`, `side-navigation` |
| CSS 변수 | 케밥케이스 | `--color-primary` |

# HTML 명명 규칙

| 구분 | 규칙 | 예시 |
| --- | --- | --- |
| class | 케밥케이스 | `product-list`, `nav-button`, `dark-mode-toggle` |
| id | 케밥케이스 | `product-list-section`, `side-navigation` |

# CSS 명명

| 구분 | 규칙 | 예시 |
| --- | --- | --- |
| CSS 변수 | 케밥케이스 | `--color-primary`, `--color-bg` |
| 클래스명 | HTML 규칙 동일 (케밥케이스) | `product-card` |

```bash
:root {
  --color-bg: #ffffff;
  --color-text: #333333;
}

```
# 주석 컨벤션 (JSDoc)

모든 export 함수에는 JSDoc 작성 권장

```jsx
/**
 * 상품 리스트를 렌더링합니다.
 * @returns {void}
 */
export function renderProductList() {
  // ...
}
```
# 들여쓰기 컨벤션
들여쓰기는 두 칸 Tab 으로 한다.
# 줄바꿈 컨벤션
매개변수가 4개 이상일 경우, 줄바꿈 한다.
