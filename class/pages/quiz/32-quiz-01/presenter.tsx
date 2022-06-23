import { memo } from "react";

function MemoPresenter() {
  console.log("프레젠터 렌더링");
  return <div>프레젠터=================================</div>;
}
export default memo(MemoPresenter);
