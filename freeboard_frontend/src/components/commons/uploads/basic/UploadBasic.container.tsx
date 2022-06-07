import React, { ChangeEvent } from "react";
import UploadBasicPresenter from "./UploadBasic.presenter";
import _ from "lodash";

export default function UploadBasicContainer(props: any) {
  const getDebounce = _.debounce((searchData) => {
    props.refetch({ search: searchData, page: 1 });
    props.setKeyword(searchData);
    props.refetchCount({ search: searchData });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <UploadBasicPresenter onChangeSearch={onChangeSearch} />;
}
