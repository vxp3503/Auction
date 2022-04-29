import React from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import Logi from '../../images/Login.svg'
import Login from '../Login/Login'
import Register from '../Register/Register'
const Layout = (props) => {
  return (
    <>
            <Container className="mt-5">
                <Row>
                    {props.isLoggin ? <Login/>: <Register/>}
                    <Col lg={8} md={6} sm={12}>
                        <img className='w-100' src={Logi} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
  )
}

export default Layout