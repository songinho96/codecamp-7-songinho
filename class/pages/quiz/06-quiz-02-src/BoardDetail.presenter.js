export default function BoardDetailPresenter(props) {
  return (
    <div>
      <div>{props.number}번 페이지 이동이 완료되었습니다!!!</div>
      {/* 데이터랜더링 data가 없으면 뒤에꺼 보여주고 있으면 앞에꺼 보여준다 */}
      <div>작성자: {props.data?.fetchBoard.writer} </div> 
      {/* 옵셔널 체이닝 : data? */}
      <div>제목: {props.data?. fetchBoard.title} </div>
      <div>내용: {props.data?.fetchBoard.contents} </div> 
    </div>
  )
}
