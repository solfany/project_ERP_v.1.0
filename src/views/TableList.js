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
import React, { useState, useEffect } from 'react';
import { db } from './../Loginbase';
import 'firebase/compat/firestore';
// import { dbService } from './../Loginbase';
// import { collection, onSnapshot } from 'firebase/firestore';
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

// function Tables() {
const Tables = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Firestore의 'users' 컬렉션에서 데이터를 가져옵니다.
    const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
      const userList = [];
      snapshot.forEach((doc) => {
        userList.push({
          // id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          city: doc.data().city,
          // 필요한 데이터가 있다면 여기에 추가합니다.
        });
      });
      setUsers(userList);
    });
    return () => unsubscribe();
  }, []);
  // --------------------------------
  //   db.collection('users').add({
  //     name: '',
  //     email: '',
  //     city: '',
  //     salary: 30000
  //   })
  //   .then((docRef) => {
  //     console.log('Document written with ID: ', docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error('Error adding document: ', error);
  //   });
  // });

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
                    <tr>
                      <th>이름</th>
                      <th>이메일</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.city}</td>
                        <td className="text-center">{users.salary}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr> */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
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

// 다른코드
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [users, setUsers] = useState([]);

//   const toggleSignupModal = () => {
//     setShowSignupModal(!showSignupModal);
//   }

//   const handleSignupSuccess = () => {
//     toggleSignupModal(); // Close the signup modal
//     const newUser = { name, email }; // Create a new user object
//     setUsers([...users, newUser]); // Add the new user to the users array
//   }
// return (
// <div className="container mt-3">
//       <h1>Users</h1>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//       <Button color="primary" onClick={toggleSignupModal}>Signup</Button>
//       <SignupModal isOpen={showSignupModal} toggle={toggleSignupModal} handleSignupSuccess={handleSignupSuccess} />
// </div>
// )
// }

// export default Tables;

{
  /* // import Signup from '../components/Signup/Signup'
// import React from 'react'


//  function TableList() {
//   return (
//     <div><Signup /></div>
//   )
// }

// export default TableList; */
}
