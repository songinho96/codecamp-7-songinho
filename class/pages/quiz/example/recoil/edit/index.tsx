import React, { useContext, useEffect, useState } from "react";
import QuizRecoil from "../../../../../src/components/units/example/write";
import { GlobalContext } from "../../../../_app";

export default function QuizEditPage() {
  // const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   setIsEdit(true);
  // }, []);

  const { isEdit, setIsEdit } = useContext(GlobalContext);

  return <QuizRecoil isEdit={isEdit} />;
}
