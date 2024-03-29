// 14-01-pagination copy
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS); // refetch

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) }); // id가 String 이기 때문에 Number 로 바꿔준다.
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value); // 검색어가 들어온다.
    getDebounce(event.target.value);
  };

  // const onClickSearch = (event) => {
  //   refetch({ search, page: 1 });
  // };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {" "}
          {index + 1}{" "}
        </span>
      ))}
    </div>
  );
}
