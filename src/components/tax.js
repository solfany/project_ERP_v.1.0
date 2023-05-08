export function calculateTax(salary) {
  if (salary <= 1200) {
    return salary * 0.06;
  } else if (salary <= 4600) {
    return salary * 0.15 - 108;
  } else if (salary <= 8800) {
    return salary * 0.24 - 522;
  } else if (salary <= 15000) {
    return salary * 0.35 - 1490;
  } else {
    return salary * 0.38 - 1940;
  }
}
// calculateTax 함수는 월급을 인자로 받아서 세금을 계산해주는 함수입니다. 이제 Employee.js 파일에서 이 함수를 import하여 사용하겠습니다.
