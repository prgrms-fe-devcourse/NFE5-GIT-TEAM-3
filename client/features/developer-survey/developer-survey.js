/**
 * 버튼 click 이벤트 발생시
 * .survey-form에 isActive가 classList.toggle로 추가되면서 보인다
 * .survey-form에 완료 버튼을 누르면 체크한 항목이 local에 저장된다
 * .survey-form에 닫기 버튼을 누르면 저장되지 않았다는 alert 창으로 경고
 * 덜 클릭하고 닫기를 누르거나 저장을 누르면 alert 창으로 경고
 * 모두 채우고 완료를 누르면 local에 저장되고 저장됐다는 알림 주기
 * 로컬에 저장이 됐다면, 추천 section에 아이템이 보인다 -> render
 * 로컬에 내역이 없다면 추천 section에 아이템이 안보인다 -> init
 */
import { setStorage, getStorage } from "../storage.js";
import { createRecommendedProducts } from "./recomended-products.js"

const surveyButton = document.querySelector('.survey-button');
const surveyForm = surveyButton.nextElementSibling;
const surveySubmit = surveyForm.lastElementChild;
const surveyClose = surveyForm.firstElementChild;
const KEY = 'survey';


/**
 * 설문조사 폼 활성화 이벤트 핸들러
 */
export function handleOpenSurvey(){
    surveyButton.addEventListener('click',()=>{
        surveyForm.classList.remove('hidden');
        // surveyForm.style.opacity = '1';
        handleSubmitSurvey();
    })
}

/**
 * 설문조사 닫기 버튼 누르기 전 유효성 검증
 * - 저장한 기록이 있는지 확인 후 변동사항 비교
 * - 변동사항 없을시 폼 바로 닫힘
 * - 변동사항 있을시 저장할지 여부 조사
 * - 결과 저장 or 닫기 이벤트 취소
 */
function checkBeforeCloseSurvey(){
    // 설문 폼을 닫기전에 저장된 내역이 있는지 확인
        const {role, workEnvironment, workShift} = getStorage(KEY);
        
        // 이전 기록과 체크된 변동사항을 비교해서 같은지 확인해야할듯?
        const isEqualRole =  JSON.stringify(role) === JSON.stringify(getCheckedList('role'));
        const isEqualWorkEnvironment =  JSON.stringify(workEnvironment) === JSON.stringify(getCheckedList('workEnvironment'));
        const isEqualWorkShift =  JSON.stringify(workShift) === JSON.stringify(getCheckedList('workShift'));

        // 변동사항이 존재한다면 저장할지 물어보기
        if (!isEqualRole || !isEqualWorkEnvironment || !isEqualWorkShift) {
            const answer = confirm('현재 진행한 내역이 저장되지 않았습니다');
            console.log(answer);
            if (answer) {
                // surveyForm.style.opacity = '0'
                surveyForm.classList.add('hidden');
            }
        }
        // 변동사항이 없다면 바로 닫힘
        if (isEqualWorkShift && isEqualWorkEnvironment && isEqualWorkShift) {
                surveyForm.classList.add('hidden');
        }
}

/**
 * 설문조사 완료 버튼 누르기 전 유효성 검증
 * - 카테고리별로 체크 여부 판단 및 선택 없을시 사용자에게 안내
 * - 모두 체크됐을시 이전에 저장한 내역이 있는지 판단
 * - 저장한 내역이 있다면 초기화 여부 확인
 * - 결과 내역 저장 및 상품 재추천
 * - 설문조사 폼 닫힘
 * @returns 
 */
function checkBeforeSubmitSurvey(){
        // 설문의 항목별로 체크가 안 된게 있을시 return값을 0으로 받기 때문에 alert창으로 사용자에게 안내
        const role = getCheckedList('role') || alert('직군을 한 가지 이상 선택해주세요');
        const workEnvironment = getCheckedList('workEnvironment') || alert('근무 환경을 한 가지 이상 선택해주세요');
        const workShift = getCheckedList('workShift') || alert('근무 시간대를 한 가지 이상 선택해주세요');
        
        // 값이 모두 체크 됐을때만 저장
        if(role && workEnvironment && workShift) {
            // 이전에 저장된 값이 있는지 확인
            const prevData = getStorage(KEY);
            if ( prevData && prevData.role.length > 0 || prevData.workEnvironment.length>0 || prevData.workShift.length>0) {             
                // 저장된 값이 있다면 초기화 진행 여부 확인
                const answer = confirm('이전 답변은 초기화됩니다. 새로 저장하시겠습니까?');
                if(!answer) return;
            }
            // 스토리지 반영 및 상품 재추천
            setStorage(KEY,{role,workEnvironment,workShift});
            createRecommendedProducts();
            // surveyForm.style.opacity = '0'
            surveyForm.classList.add('hidden');
        }

        // 오류 기록해두기
        // // 값이 모두 체크 됐을때만 저장
        // if(role && workEnvironment && workShift) {
        //     // 이전에 저장된 값이 있는지 확인
        //     const {role, workEnvironment, workShift} = getStorage(KEY);
        //     if (role.length>0 || workEnvironment.length>0 || workShift.length>0) {             
        //         // 저장된 값이 있다면 초기화 진행 여부 확인
        //         const answer = confirm('이전 답변은 초기화됩니다. 새로 저장하시겠습니까?');
        //         if(!answer) return;
        //         // 스토리지 반영 및 상품 재추천
        //         setStorage(KEY,{role,workEnvironment,workShift});
        //         createRecommendedProducts();
        //     }
        //     setStorage(KEY,{role,workEnvironment,workShift});
        //     createRecommendedProducts();
        // }

}


/**
 * 설문조사 결과 제출 이벤트 핸들러
 */
function handleSubmitSurvey(){
    surveyClose.addEventListener('click', checkBeforeCloseSurvey);
    surveySubmit.addEventListener('click',checkBeforeSubmitSurvey);
}

/**
 * 옵션 선택했는지 확인
 * @param {string} category 체크할 옵션을 가져올 카테고리
 * @returns 
 * - 체크된 옵션 배열 반환
 * - 값이 존재하지 않을시 반환값 없음
 */
function getCheckedList(category){
    const checkedListValue = [];
    const checkedList = document.querySelectorAll(`input.${category}:checked`);
    // querySelectorAll시 배열을 반환하기 때문에 길이가 0 이하라면 선택된게 없다고 판단
    if (checkedList.length <= 0) return 0; // 값이 선택 안됐을시 0 반환 후 종료

    // 선택된 옵션값(textContent) 얻기
    checkedList.forEach(item => {
        const label = document.querySelector(`label[for="${item.id}"]`);
        const itemName = label.lastElementChild;
        checkedListValue.push(itemName.textContent);
    })

    return checkedListValue; // 값이 존재할시 리스트 반환 후 종료
}

handleOpenSurvey();


/**
 * 각 카테고리의 옵션 '한 개'를 생성하는 함수
 * @param {string} parent 생성 후 렌더링 해 줄 부모 노드(카테고리)
 * @param {string} option 생성할 옵션
 */
function createCheckbox(parent, option){
    const parentNode = document.querySelector(`.${parent}`);
    // const input = document.createElement('input');
    // input.setAttribute('type','checkbox');
    // input.setAttribute('class',parent);
    // input.setAttribute('id',`${parent}-${option}`); 
    // const label = document.createElement('label');
    // label.setAttribute('class',`${parent}-item`);
    // label.setAttribute('for',`${parent}-${option}`);
    // label.textContent = option;
    // parentNode.append(input, label);
    // 이미지나 아이콘 넣어줄거면 경로명에 ${}들어가게 저장해야할듯
    // 아니면 객체로 저장해서 create에 넘겨줘도 될듯

    const template = /*html */`
        <input class="${parent}" id="${parent}-${option}" type="checkbox" />
        <label class="${parent}-item" for="${parent}-${option}">
            <div class="check">
                <i class="bx bx-circle"></i>
                <i class="bx bx-check-circle"></i>
            </div>
            <p>${option}</p>
        </label>
    `
    parentNode.insertAdjacentHTML('beforeend',template);
}


/**
 * 설문조사 폼 생성
 */
export function createForm(){
    const role = ['frontend','backend','ai','publisher'];
    const workEnvironment = ['home','office','cafe'];
    const workShift = ['day','night'];

    role.forEach((item)=>{
        createCheckbox('role',item);
    })
    workEnvironment.forEach((item)=>{
        createCheckbox('workEnvironment',item);
    })
    workShift.forEach((item)=>{
        createCheckbox('workShift',item);
    })

}

createForm();
initSurvey();

/**
 * 설문조사 init
 * - 저장된 결과 불러오기
 * - 처음이라면 빈 배열 생성
 */
export function initSurvey(){
    const data = getStorage(KEY);
    if(!data) {
        setStorage(KEY,{role:[], workEnvironment:[], workShift:[]});
    }
    createRecommendedProducts();
}







