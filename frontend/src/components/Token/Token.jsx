import React from 'react'
import { Container, Row, Col, Form , Button} from 'react-bootstrap'

import { useParams } from 'react-router-dom'
const Token = ({match}) => {
  const { token } = useParams()

  console.log("token After Login", token);
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col style={{
            backgroundColor: '#187aa3',
            padding: '20px', display:'flex',
          }}>
          <div>
          <h2>Token</h2>
          <h4 style={{overflowWrap: 'anywhere'}}> {token}</h4>

          </div>
          
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Token
