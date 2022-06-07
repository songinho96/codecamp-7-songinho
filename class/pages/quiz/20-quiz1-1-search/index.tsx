import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      contents
      title
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 80%;
  display: flex;
`;

const Search = styled.input``;

const Word = styled.div`
  color: ${(props: any) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  console.log(data?.fetchBoards[0]?.writer);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const getDebounce = _.debounce((searchData) => {
    refetch({ search: searchData, page: 1 });
    setKeyword(searchData);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <Search type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el: any) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el: any) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </Column>
        </Row>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {` ${index + 1} `}
        </span>
      ))}
    </>
  );
}
