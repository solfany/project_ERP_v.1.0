// /*!

// =========================================================
// * Black Dashboard React v1.2.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/black-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
import React, { useState, useEffect, useSelector, useHistory, message } from 'react';
import { db } from './../Loginbase';
import 'firebase/compat/firestore';
import SignupModal from '../components/Signup/Signup';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Row,
  Col,
} from 'reactstrap';

const Tables = () => {
  const [users, setUsers] = useState([]);

  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const history = useHistory();
  useEffect(() => {
    if (init && userObj) {
      // 처음 렌더링할 거 있으면 넣는 곳
    } else {
      message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
      history.push('/admin/MainLogin');
    }
  }, [init, userObj, history]);

  useEffect(() => {
    // Firestore의 'users' 컬렉션에서 데이터를 가져옵니다.
    const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
      const userList = [];
      snapshot.forEach((doc) => {
        userList.push({
          // id: doc.id,
          employeeNum: doc.data().employeeNum,
          ranks: doc.data().ranks,
          name: doc.data().name,
          email: doc.data().email,
          // 필요한 데이터가 있다면 여기에 추가합니다.
        });
      });
      setUsers(userList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">직원관리</CardTitle>
              </CardHeader>
              <CardHeader className="ml-auto">
                <SignupModal />
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr className="text-center">
                      <th>사원번호</th>
                      <th>직급</th>
                      <th>이름</th>
                      <th>이메일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((users) => (
                      <tr key={users.id}>
                        <td>{users.employeeNum}</td>
                        <td>{users.ranks}</td>
                        <td>{users.name}</td>
                        <td className="text-center">{users.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Tables;