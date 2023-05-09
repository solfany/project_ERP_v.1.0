import React, { useState } from 'react';
import { authService } from './../../Loginbase';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Button,
  Label,
  Form,
  Container,
} from 'reactstrap';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      await userCredential.user.updateProfile({ displayName: name });
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {/* <div className="content"> */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs="12" sm="8" md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Signup</CardTitle>
              </CardHeader>
              <CardBody>
                {success && <p>Signup successful! Please login.</p>}
                {!success && (
                  <Form onSubmit={handleSignup}>
                    {error && <p>{error}</p>}
                    <div>
                      <Label htmlFor="name">Name:</Label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email:</Label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="password">Password:</Label>
                      <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password:</Label>
                      <Input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit">Signup</Button>
                  </Form>
                )}
              </CardBody>
            </Card>
            {/* <h1>Signup</h1> */}
            {/* {success && <p>Signup successful! Please login.</p>}
      {!success &&
        <form onSubmit={handleSignup}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
        </form>
      } */}
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
}

export default Signup;
