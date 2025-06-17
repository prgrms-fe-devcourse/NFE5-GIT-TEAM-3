/**
 * id : number
 * name : string
 * price : number
 * img : string
 * recomendedRole : string, array
 * recomendedLanguage : string, array
 * recomendedIDE : string, array
 */
export const product1 = {
  id: 1,
  name: '모자',
  price: 15000,
  img: './assets/images/easter-egg/모자.jpg',
  category: 'list-01',
  recommendedRole: ['ai', 'publisher'],
  recommendedLanguage: ['javascript', 'python', 'java', 'html', 'css'],
  recommendedIDE: ['vscode', 'git', 'pycharm', 'eclipse', 'editplurs'],
};

export const product2 = {
  id: 2,
  name: '백 후드티',
  price: 35000,
  img : './assets/images/easter-egg/후드티.jpg',
  category: 'list-02',
  recommendedRole: ['backend'],
  recommendedLanguage: ['python', 'java'],
  recommendedIDE: ['vscode', 'git', 'pycharm', '기타'],
};

export const product3 = {
  id: 3,
  name: '맥북',
  price: 4000000,
  img: './assets/images/easter-egg/맥북.jpg',
  category: 'list-03',
  recommendedRole: ['frontend', 'backend', 'ai', 'publisher'],
  recommendedLanguage: ['javascript', 'python', 'java', 'html', 'css'],
  recommendedIDE: ['vscode', 'git', 'pycharm', 'eclipse', 'editplurs'],
};

export const product4 = {
  id: 4,
  name: '최고급 GPU',
  price: 1500000,
  img: './assets/images/easter-egg/gpu.jpg',
  category: 'list-04',
  recommendedRole: ['ai'],
  recommendedLanguage: ['python'],
  recommendedIDE: ['pycharm'],
};

export const product5 = {
  id: 5,
  name: '프론트엔드 짱',
  price: 100000000,
  img: './assets/images/easter-egg/프론트엔드.jpg',
  category: 'list-01',
  recommendedRole: ['frontend'],
  recommendedLanguage: ['javascript'],
  recommendedIDE: ['vscode'],
};
