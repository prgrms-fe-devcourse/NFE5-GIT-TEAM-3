

const typeOf = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()


const isObject = data => typeOf(data) === 'object';
const isArray = data => typeOf(data) === 'array';
const isBoolean = data => typeOf(data) === 'boolean';
const isNull = data => typeOf(data) === 'null';
const isUndefined = data => typeOf(data) === 'undefined';
const isFunction = data => typeOf(data) === 'function';
const isSymbol = data => typeOf(data) === 'symbol';
const isString = data => typeOf(data) === 'string';
const isNumber = data => typeOf(data) === 'number';
const isMath = data => typeOf(data) === 'math';
const isBigInt = data => typeOf(data) === 'bigint';



