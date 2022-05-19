const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교"},
  { name: "훈이", age: 11, school: "토끼초등학교"}
]





export default function Bonus1() {

  const classRabit = classmates.filter((item) => (item.school === "토끼초등학교"))
  const classSquirrel = classmates.filter((item) => (item.school === "다람쥐초등학교"))


  console.log(classRabit)
  for (let i = 0; i < classRabit.length; i++){
    classRabit[i].candy = 10
  }
  
  console.log(classRabit)
  console.log(classSquirrel)
  
  const result = classSquirrel.map((el, i) => {
    return (
      <div key={i}>
        <div>{el.name + ' 어린이'} {el.age} {el.school} </div>
      </div>
    )
  })

  return (
    <div>
      {classRabit.map((el, i) => (
        <div key={i}>{el.name} {el.age} {el.school} {el.candy} </div>
      ))}
      {result}
    </div>
  )
}


