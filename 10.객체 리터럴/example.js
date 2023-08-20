//10-11
var circle = {
  radius: 5, // 프로퍼티

  getDiameter: function () {
    // 메서드
    return 2 * this.radius; // this는 circle을 가리킨다
  },
};

console.log(circle.getDiameter()); // 10

//10-19
//ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};
console.log(obj); // {x: 1, y: 2}

// ES6
var x = 1,
  y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };
console.log(obj); // {x: 1, y: 2}

// 10-21
// ES5
var prefix = "prop";
var i = 0;
var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6
var prefix = "prop";
var i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10-23
// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi" + this.name);
  },
};
obj.sayHi(); // Hi Lee

// ES6
const obj = {
  name: "Lee",
  // 메서드 축약 표현
  sayHi() {
    console.log("Hi" + this.name);
  },
};
obj.sayHi(); // Hi Lee
