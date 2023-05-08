import React from "react";
import { useState, useEffect } from "react";
import inputNumberFormat from "./inputNumberFormat";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  h4,
} from "reactstrap";

function EmployeeCalculator() {
  // 소득세, 국민연금, 건강보험료, 산재보험, 고용보험 계산기
  const [hourlyWage, setHourlyWage] = useState(0); // 월급 (세전)
  const [incomeTax, setIncomeTax] = useState(0); // 소득세
  const [pension, setPension] = useState(0); // 국민연금
  const [healthInsurance, setHealthInsurance] = useState(0); // 건강보험료
  const [jang, setJang] = useState(0); //장기요양
  const [industrialAccidentInsurance, setIndustrialAccidentInsurance] =
    useState(0); // 산재보험료
  const [employmentInsurance, setEmploymentInsurance] = useState(0); // 고용보험료
  const [jap, setJap] = useState(0); //근로소득세
  const [miniJap, setMinijap] = useState(0); //근로소득세

  const [totalPay, setTotalPay] = useState(0); // 총 급여

  function handleCalculate() {
    const salary = parseInt(hourlyWage) * 1;

    const {
      incomeTax,
      pension,
      healthInsurance,
      jang,
      employmentInsurance,
      industrialAccidentInsurance,
      jap,
      miniJap,
    } = calculateTaxesAndInsurance(salary);

    setIncomeTax(incomeTax);
    setPension(pension);
    setHealthInsurance(healthInsurance);
    setJang(jang);
    setEmploymentInsurance(employmentInsurance);
    setIndustrialAccidentInsurance(industrialAccidentInsurance);
    setJap(jap);
    setMinijap(miniJap);

    const bTotalPay =
      salary -
      incomeTax -
      pension -
      healthInsurance -
      jang -
      employmentInsurance -
      industrialAccidentInsurance -
      jap -
      miniJap;

    setTotalPay(bTotalPay);
  }

  function calculateTaxesAndInsurance(salary) {
    // 소득세 계산

    // 국민연금 계산
    const pension = Math.floor(salary * 0.045);

    // 건강보험료 계산
    const healthInsurance = Math.floor(salary * 0.03545);

    //장기요양
    const jang = Math.floor(salary * 0.03545 * 0.01281);

    // 고용보험료 계산
    const employmentInsurance = Math.floor(salary * 0.009);

    // 산재보험료 계산
    const industrialAccidentInsurance = Math.floor(salary * 0);

    //근로 소득세 (1인가구 공제율 100%)
    const jap = Math.floor(salary * 0.00976);

    //지방 소득세
    const miniJap = Math.floor(jap * 0.1);
    return {
      incomeTax,
      pension,
      healthInsurance,
      employmentInsurance,
      industrialAccidentInsurance,
      jang,
      jap,
      miniJap,
    };
  }

  return (
    <>
      <h1>급여 모의 계산기</h1>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <h4 htmlFor="hourlyWage">월급(세전)을 입력하세요</h4>
                    <Input
                      type="number"
                      name="hourlyWage"
                      id="hourlyWage"
                      placeholder="월급을 입력하세요"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <h4 htmlFor="workingHours">
                      국민연금: {pension.toLocaleString()}원
                    </h4>
                    <h4 htmlFor="workingHours">
                      건강보험료: {healthInsurance.toLocaleString()}원
                    </h4>
                    <h4 htmlFor="workingHours">
                      장기요양료: {jang.toLocaleString()}원
                    </h4>
                    <h4 htmlFor="workingHours">
                      산재보험료: {industrialAccidentInsurance.toLocaleString()}
                      원
                    </h4>
                    <h4 htmlFor="workingHours">
                      고용보험료: {employmentInsurance.toLocaleString()}원
                    </h4>
                    <h4 htmlFor="workingHours">
                      근로소득세 : {jap.toLocaleString()}원
                    </h4>
                    <h4 htmlFor="workingHours">
                      지방소득세 : {miniJap.toLocaleString()}원
                    </h4>
                  </FormGroup>
                  <Button color="info" onClick={handleCalculate}>
                    계산하기
                  </Button>
                  <h3>실 급여: {inputNumberFormat(totalPay)}원</h3>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default EmployeeCalculator;
