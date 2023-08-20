// 11-01
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다.
// 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

// 11-17
var person = {
  name: "lee",
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖는다.
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = "Kim";

// person을 통해 객체를 변경한다.
person.name = "Park";
person.address = "Seoul";

// copy와 person은 동일한 객체를 기리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(copy);    // {name: 'Park', address: 'Seoul'}
console.log(person);  // {name: 'Park', address: 'Seoul'}
