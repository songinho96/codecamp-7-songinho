// **001. 선언과 할당**

// **`문제 설명`**

// 'name'이라는 변수를 선언하고, 자신의 이름을 할당하세요.
const name = "송인호"

let name = "송인호"

var name = "송인호"


// **002 . 재할당**

// **`문제 설명`**

// 주어진 변수 'name'에 "철수"를 재할당하세요.
let name = "송인호"

name = "철수"

console.log(name) // "철수" 



// **003. 배열의 선언과 할당**

// **`문제 설명`**

// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.
const fruits = []

fruits.push("사과", "바나나", "파인애플")

const fruits = ["사과", "바나나", "파인애플"]

console.log(fruits) // ["사과", "바나나", "파인애플"]



// **004. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

const fruits = ["사과", "바나나", "파인애플"]
const newFruits = []

newFruits.push( fruits[fruits.length -1] )
console.log(newFruits) // ["파인애플"]


// **008. 객체의 선언과 할당**

// **`문제 설명`**

// 주어진 student 객체에

// 'name'이라는 키를 만들고, "철수"를 할당하세요.
const student = {};

student.name = "철수" 

console.log( student )


const student = {};

student["name"] = "철수"

console.log( student )


const student = {
  name : "철수"
};

console.log(student) // { name : "철수" }


// **009. 객체의 키&값 추가**

// **`문제 설명`**

// student와 school 두 개의 객체가 있습니다.

// student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school;


console.log(student) // 
	// {
  //   name: '철수',
  //   age: 8,
  //   school: {
  //     name: '다람쥐초등학교',
  //     teacher: '다람이'
  //   }
  // }





















