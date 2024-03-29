import DaumPostcode from "react-daum-postcode";

export default function Postcode() {
  const handleComplete = (data: any) => {
    console.log(data); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
}
