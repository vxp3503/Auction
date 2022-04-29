import React from 'react'
import axios from 'axios'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import profile from '../../images/profile.png'
import Logi from '../../images/Login.svg'
import './Login.css'
const Login = () => {
    function login() {
        var bodyFormData = new FormData();
        bodyFormData.append('username', 'vhii')
        bodyFormData.append('password', '1234')
        bodyFormData.append('email', 'hihi123@gmail.com')
        bodyFormData.append('first_name', 'Vikrant')
        bodyFormData.append('last_name', 'Verma')
        console.log("Register")
        axios({
            method: "post",
            url: "http://localhost:8000/register",
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
        <img className="icon-img" src={profile} alt="icon" />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary col-12" type="submit">Login</Button>
            <div className='Register'>
                Don't have account
                <Button variant="primary col-12" type="submit">Register</Button>
            </div>
        </Form>
    </Col>
    )
}

export default Login






// <Container className="mt-5">
// <Row>
//     <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
//         <img className="icon-img" src={profile} alt="icon" />
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>


//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <Button variant="primary col-12" type="submit">Login</Button>
//             <div className='Register'>
//                 Don't have account
//                 <Button variant="primary col-12" type="submit">Register</Button>
//             </div>
//         </Form>
//     </Col>
//     <Col lg={8} md={6} sm={12}>
//         <img className='w-100' src={Logi} alt="" />
//     </Col>
// </Row>
// </Container>