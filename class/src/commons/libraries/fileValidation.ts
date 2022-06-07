export const checkFileValidation = (file?: File) => {
  // 파일 사이즈가 없다면?
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }

  // 파일 사이즈가 크다면? 5메가바이트
  if (file.size > 5 * 1024 * 1024) {
    alert("파일이 용량이 너무 큽니다(제한: 5MB!!");
    return false;
  }

  // 파일 확장자명 제한하기
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다!!!");
    return false;
  }

  return true;
};
