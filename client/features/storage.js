/**
 * local storage에 데이터 저장하기
 * @param {string} KEY 
 * @param {list} value 
 */
export function setStorage(KEY, value){
    try {
        localStorage.setItem(KEY,JSON.stringify(value))
    } catch {
        console.log('local data 저장에 실패했습니다');    
    }
}

/**
 * local storage에서 데이터 가져오기
 * @param {string} KEY 
 * @returns 로컬에 저장된 데이터
 */
export function getStorage(KEY){
    try{
        const data = localStorage.getItem(KEY);
        return JSON.parse(data);
    } catch {
        console.log('local data 가져오기에 실패했습니다');
        
    }
}
