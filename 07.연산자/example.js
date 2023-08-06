// 07-03 부수 효과(암묵적 할당)
var x = 1;
x++;
console.log(x); // 2

// 07-06
// 문자열을 숫자로 타입 변환
var x = "1";
console.log(+x); // 1
console.log(x); // '1'

// 불리언 값을 숫자로 타입 변환
var x = true;
console.log(+x); // 1
console.log(x); // true

// 문자열을 숫자로 변환할 수 없을때 NaN 반환
var x = "hello";
console.log(+x); // NaN
console.log(x); // 'hello'

console.log(Number.isNaN(NaN) === Number.isNaN(NaN))

