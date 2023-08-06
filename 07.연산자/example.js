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


//07-18
-0 === +0;              // true
Object.is(-0, +0);      // false

NaN === NaN;            // false
Object.is(NaN, NaN)      // true




//07-25
// 논리합(||) 연산자
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false

// 논리곱(&&) 연산자
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false

// 논리 부정(!) 연산자
!true;          // false
!false;         // true
!0;             // true
!'Hello';       // false


//07-31
typeof ''                // "string"
typeof 1                 // "number"
typeof NaN               // "number"
typeof true              // "boolean"
typeof undefined         // "undefined"
typeof Symbol()          // "symbol"
typeof null              // "object"
typeof []                // "object"
typeof {}                // "object"
typeof new Date()        // "object"
typeof /test/gi          // "object"
typeof function () {}    // "function"


//7.9
2 ** 2;         // 4
Math.pow(2, 2); // 4

// 음수를 밑으로 사용해 계산하려면 괄호로 묶어야 한다.
(-5) ** 2;     // 25

// 할당 연산자와 함께 사용할 수 있다.
var num = 5;
num **= 2;     // 25

// 이항 연산자 중에서 우선순위가 가장 높다.
2 * 5 ** 2;    // 25



//07-40
var x;

// 할당연산자 - 변수 값이 변함
x = 1;
console.log(x); // 1

// 증가/감소 연산자 - 피연산자의 값이 재할당되어 변경
x++;
console.log(x); // 2

// delete 연산자 - 객체의 프로퍼티를 삭제
var o = {a : 1};
delete o.a;
console.log(o); // {}