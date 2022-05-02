import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Form, Col, Row, Button, Alert } from 'react-bootstrap'
import profile from '../../images/profile.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import jQuery from 'jquery'
const Login = (props) => {
    let navigate=useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword]=useState();

    const usernameChangeHandler=(event)=>{
        setUsername(event.target.value)
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value)
    }
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var csrftoken = getCookie('csrftoken');



    function register(){
        navigate(`/register`)
    }
    function login() {
        var bodyFormData = new FormData();
        bodyFormData.append('username', username)
        bodyFormData.append('password', password)
        axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrftoken
            }
        }).then(function (response) {
            console.log(response.data);
            sessionStorage.setItem("user",JSON.stringify(response.data))
            let user1=sessionStorage.getItem("user")
            console.log(JSON.parse(user1))
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
                    <Form.Control type="text" onChange={usernameChangeHandler} placeholder="Enter username" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" onChange={passwordChangeHandler} placeholder="Password" />
                </Form.Group>

                {props.iscreated?<Alert key="success" variant="success">
                    Account created Successfully
                </Alert>:""}


                <Button variant="primary col-12" onClick={login}>Login</Button>
                <div className='Register'>
                    Don't have account
                    <Button variant="primary col-12" onClick={register}>Register</Button>
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