import React, { ChangeEvent } from "react";
import _ from "lodash";
import SearchbarBasicPresenter from "./SearchbarsBasic.presenter";

export default function SearchbarBasicContainer(props: any) {
  const getDebounce = _.debounce((searchData) => {
    props.refetch({ search: searchData, page: 1 });
    props.setKeyword(searchData);
    props.refetchCount({ search: searchData });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return <SearchbarBasicPresenter onChangeSearch={onChangeSearch} />;
}
