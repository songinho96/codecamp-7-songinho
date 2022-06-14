import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;
export default function ApolloCacheState() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: {
        boardId,
      },
      // refetchQueries: [{query: FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;

              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              ); // el._id 가 안되므로, readFeild 에서 꺼내오기
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다.",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </MyRow>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// // 2.
// function onClickAAA(aaa) {
//   // const aaa = "철수"
// }

// onClickAAA("철수", age: 13);

// // 3.
// function onClickAAA(school, { name, age }); // const aaa = {name: "철수", age: 13}

// conClickAAA{ name: "철수", age: 13}

// // 4

// function createUser(name, age, school){

// }

// const name = "철수",
// const age = 13,
// const school = "다람쥐초등학교"
// createUser(name, age, school)

// // 5

// function createUser({name, age, school}){

// }

// const profile = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// createUser(profile)

// // 6.

// function createUser({name, age, school}){

// }

// const name = "철수",
// const age = 13,
// const school = "다람쥐초등학교"

// createUser({
//   name:name,
//   age:age,
//   school:school
// })
// -------------------------------------------------------------------

// // *** 1.
// function onClickAAA(aaa){ // const aaa = "철수"

// }
// onClickAAA("철수")

// // *** 2. 객체 통째로 받기
// function onClickAAA(aaa){ // const aaa = { name: "철수", age: 13 }

// }
// onClickAAA({name: "철수", age: 13})

// // *** 3. name과 age를 꺼내서 받기 (구조분해할당을 해서 받은 것)
// // 구조분해할당을 굳이 사용하지 않아도 괜찮지만
// // 서비스 안정성을 생각한다면 구조분해할당 사용을 권장함
// function onClickAAA(school, { name, age }){ // const aaa = { name: "철수", age: 13 }

// }
// onClickAAA("다람쥐초등학교", {name: "철수", age: 13})

// // *** 4.
// function createUser(name, age, school){

// }
// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"
// // age가 빠지면 school이 age 자리에 들어가는 문제가 발생
// // 매개변수가 많으면 그런 일이 일어날 수 있음
// // 좋지 않은 방법
// createUser( name, age, school)

// // *** 5. 구조분해할당을 해서 객체로 받음
// // 객체로 받으면 순서가 중요하지 않게 되고, 요소가 누락되는 문제를 해결할 수 있음
// function createUser({ name, age, school }){

// }
// const profile = {
//     name: "철수",
//     age: 13,
//     school: "다람쥐초등학교"
// }
// createUser(profile)

// // *** 6. 객체를 분리해서 속 내용만 직접 넣어준 케이스
// // 앞으로는 이 방법을 사용하자!
// function createUser({ name, age, school }){

// }
// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"

// // 4번 구조와 비슷함
// createUser({ name, age, school }) // short-hand-property
