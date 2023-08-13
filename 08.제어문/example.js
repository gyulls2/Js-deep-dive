// 08-01
// 블록문
{
  var foo = 10;
}
// 제어문
var x = 1;
if (x < 10) {
  x++;
}
// 함수 선언문
function sum(a, b) {
  return a + b;
}

//08-04
var x = 2;

// if else 문 사용
var result;
if (x % 2) {
  // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = "홀수";
} else {
  result = "짝수";
}

// 삼항 조건 연산자 사용
var result = x % 2 ? "홀수" : "짝수";

//08-18
if (true) {
  // break;
}

//08-16
var count = 0;

while(true){
  console.log(count);
  count++;

  if(count===3) break;
}


//08-19
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

// foo라는 레이블 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}
console.log("Done!");

//08-21
// outer라는 식별자가 붙은 레이블 for문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3 이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner[${i},${j}]`);
  }
}

//08-22
// 문자열에서 특정 문자의 인덱스 검색하기
var string = "Hello World.";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 "l"이면
  if (string[i] === search) {
    index = i;
    break; // 반복문을 탈출한다.
  }
}
console.log(index); // 2

//08-24
// 문자열에서 특정 문자의 개수 세기
var string = "Hello World.";
var search = "l";
var count = 0;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // "l"이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

//08-25
for (var i = 0; i < string.length; i++) {
  // "l"이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}
