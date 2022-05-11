import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "./index.css"
import { useNavigate } from 'react-router-dom'
const Index = (props) => {
  let navigate=useNavigate()
  const ActiveChangeHandler=()=>{
    navigate(`/active`)
  }
  const LoginChangeHandler=()=>{
    navigate('/login')
  }
  if(props.user.sets==true)
  {
    return(
    <>
    <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand>Auctions</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={ActiveChangeHandler}>Active</Nav.Link>
      <Nav.Link>watchlist</Nav.Link>
      <Nav.Link>Logout</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#deets">username</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
    )
  }
  return (
    <>
  <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand>Auctions</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={ActiveChangeHandler}>Active</Nav.Link>
      <Nav.Link onClick={LoginChangeHandler}>Login</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#deets">More deets</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Index