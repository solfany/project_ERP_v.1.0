import React from 'react';

// reactstrap components
// import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
// reactstrap components
// import { Button, CardTitle } from 'reactstrap';

import { Row, Col } from 'reactstrap';
import '../assets/css/styles.css';
// import Attendance from './Attendance';

// core components

// css 참고 사이트
// https://runebook.dev/ko/docs/react_bootstrap/components/buttons/index

function Main() {
  const currentDate = new Date(); // 현재 시간을 나타내는 Date 객체 생성
  const year = currentDate.getFullYear(); // 현재 년도를 구함
  const month = currentDate.getMonth() + 1; // 현재 월을 구함 (getMonth()는 0부터 시작하므로 1을 더함)
  const day = currentDate.getDate(); // 현재 일을 구함
  return (
    <>
      <div className="content">
      <Row>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
            <h1>{`${year}년 ${month}월 ${day}일`}</h1>
            </div>
          </div>
        </Col>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
              <h1>공지사항</h1>
              {/* <Attendance /> */}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
              DashBoard
            </div>
          </div>
        </Col>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
              <h1>휴가 현황</h1>
            </div>
          </div>
        </Col>
      </Row>
        {/* <Row>
          <Col xs="6">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-right" sm="6">
                    <h5 className="card-category"> 안녕하세요 샘플입니다.</h5>
                    <h1>안녕하세요 아이콘 페이지 입니다. </h1>
                    <CardTitle tag="h2">이건 카드 타이틀</CardTitle>
                    <Col xs="6">
                      <Button color="primary" id="0" size="m">
                        버튼
                      </Button>
                    </Col>
                    <Col xs="6">
                      <Button color="info" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="secondary" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="success" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="danger" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="warning" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="light" id="0" size="m">
                        버튼
                      </Button>
                      <Button color="dark" id="0" size="m">
                        버튼
                      </Button>
                      <Button variant="outline-primary">Primary</Button>{' '}
                      <Button variant="outline-secondary">Secondary</Button>{' '}
                      <Button variant="outline-success">Success</Button>{' '}
                      <Button variant="outline-warning">Warning</Button>{' '}
                      <Button variant="outline-danger">Danger</Button>{' '}
                      <Button variant="outline-info">Info</Button>{' '}
                      <Button variant="outline-light">Light</Button>{' '}
                      <Button variant="outline-dark">Dark</Button>
                    </Col>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <div className="chart-area">이건 이건 샘플 입니다~!</div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Main;
