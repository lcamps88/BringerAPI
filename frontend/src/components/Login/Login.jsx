import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const [token, setToken] = useState()

  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  })
  const { user, password } = credentials

  const redirect = location.search ? location.search.split('=')[1] : `/${token}`

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    loginToken(user, password)
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setCredentials({ ...credentials, [name]: value })
  }


  const loginToken = async (user, password) => {
    try {

      console.log("user,password",user,password);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/jwt/login',
        { user, password },
        config
      )

      setToken(data.token)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    document.title = 'Generate-Token'
    if (token) {
      navigate(redirect)
    
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col
          style={{
            backgroundColor: '#187aa3',
            padding: '20px',
          }}
        >
          <Form className="form" style={{ color: '#fff' }} onSubmit={handleLoginSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              
            >
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User"
                name="user"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Token
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Login
