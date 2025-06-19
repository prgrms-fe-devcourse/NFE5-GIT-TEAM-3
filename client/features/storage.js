/**
 * Local Storage에 데이터 저장하기
 * 
 * @param {string} KEY - 저장할 키
 * @param {object | any[]} value - 저장할 값
 * @returns {void}
 */
export function setStorage(KEY, value){
    try {
        localStorage.setItem(KEY,JSON.stringify(value))
    } catch {
        console.log('local data 저장에 실패했습니다');    
    }
}

/**
 * Local Storage에서 데이터 가져오기
 * 
 * @param {string} KEY - 가져올 데이터의 키
 * @returns {any | null} 로컬에 저장된 데이터 객체 또는 실패 시 null
 */
export function getStorage(KEY){
    try{
        const data = localStorage.getItem(KEY);
        return JSON.parse(data);
    } catch {
        console.log('local data 가져오기에 실패했습니다');
        
    }
}
