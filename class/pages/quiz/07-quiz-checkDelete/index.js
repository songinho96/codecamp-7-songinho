import styled from "@emotion/styled";
import { Checkbox } from "antd";
import { useState } from "react";

const Wrapper = styled.div`
`;

export default function checkDelete() {
  const dataList = [
    { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
    { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
    { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
    { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
    { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
    { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
  ];

  

  return (
    // <div>
    //   {dataList.map((el) => (
    //     <div>{el.id} {el.data} {el.date}</div>
    //   ))}
    // </div>
    <div>
      <div>
        <table>
          <tr>
            <th>checkbox</th>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
          {dataList.map((list) => (
            <tr>
              <td>checkbox</td>
              <td>{list.id}</td>
              <td>{list.data}</td>
              <td>{list.date}</td>
            </tr>
          ))}
        </table>

        
      </div>
    </div>
  )

}
