import { Alert, Calendar } from "antd";
import moment from "moment";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(moment("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(moment("2017-01-25"));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
      <Alert
        message={`오늘은 ${selectedValue?.format("YYYY-MM-DD")} 입니다.`}
      />
      <Alert message={`오늘은 ${selectedValue?.format("MM")}달 입니다`} />
    </>
  );
};

export default App;
