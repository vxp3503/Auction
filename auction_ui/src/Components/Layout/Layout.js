import React from 'react'
import { Container, Form, Alert, Col, Row, Button } from 'react-bootstrap'
import Logi from '../../images/Login.svg'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Active from '../Active/Active'
import Index from "../index/index";
import Welcome from '../Welcome/Welcome'
const Layout = (props) => {
    if (props.user.sets===true)
    {
        return(
            <>
            <Index user={props.user}/>
            </>
        )
    }
    return (
        <>
            <Index user={props.user}/>
            {props.welcome ? <Welcome /> :
            <>
                {
                    props.active ? <Active List={props.List} /> :
                        <Container className="mt-5">
                            <Row>
                                {props.isLoggin ? <Login iscreated={props.iscreated} /> : <Register />}
                                <Col lg={8} md={6} sm={12}>
                                    <img className='w-100' src={Logi} alt="" />
                                </Col>
                            </Row>
                        </Container>
                }
                </>
                }
        </>
    )
}

export default Layout