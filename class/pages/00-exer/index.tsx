// export function getString(arg: string): string {
//   return arg;
// }
// const result1 = getString("철수");
// console.log(result1);

// export function getNumber(arg2: number): number {
//   return arg2
// }
// const result2 = getNumber(1234)
// console.log(result2)

// export function getAny(arg3: any): any {
//   return arg3
// }

// const result3 = getAny(true)

// // generic
// export function getGeneric<MyType>(arg:MyType): MyType {
//   return arg
// }

// const aaa: string = "철수"
// const bbb: number = 123

// getGeneric(bbb)

// getGeneric(aaa)

// export function getGeneric<T1,T2,T3>(arg1:T1, arg2:T2, arg3:T3): [T3,T2,T1] {
//   return [arg3, arg2, arg1]
// }

// const result = getGeneric("철수", "다람쥐초등학교", 123)
// console.log(result)

// export function firstFunc<T1>(arg1: T1){
//   return function secondFunc<T2>(arg2: T2):  [T1,T2]{
//     return [arg1, arg2]
//   }
// }

// const resultFunc1 = firstFunc("철수")(true)
// console.log(resultFunc1)

// export const firstFunc = <T1>(arg1: T1) => <T2>(arg2: T2): [T1,T2] => {
//   return [arg1, arg2]
// }

// const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
//     return [arg1, arg2];
//   };

// const onClickSaveCookie = () => {
//   document.cookie = "aaa=철수";
// };

// const onClickGetCookie = () => {
//   const mycookie = document.cookie;
//   console.log(mycookie);
// };

// const onClickSaveLocal = () => {
//   localStorage.setItem("하하하", "호호호");
// };

// const onClickgetLocal = () => {
//   const bbb = localStorage.getItem("하하하");
//   console.log(bbb);
// };

// const onClickSaveSession = () => {
//   sessionStorage.setItem("ccc", "훈이")
// }

// const onClickGetSession = () => {
//   sessionStorage.getItem("ccc")
// }

// const onClickSaveCookie = () => {
//   document.cookie = "aaa=철수"
// }

export default function AAA() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=바바바바";
  };

  const onClickGetCookie = () => {
    const ccc = document.cookie;
    console.log(ccc);
  };

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키등록</button>
      <button onClick={onClickGetCookie}>쿠키받기</button>
    </>
  );
}
