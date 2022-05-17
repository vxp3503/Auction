import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import AuctionContext from '../../context/Auction/AuctionContext'
const Index = (props) => {
  let navigate=useNavigate()


  const ActiveChangeHandler=()=>{
    navigate('/active')
  }

  const WatchListHandler=()=>{
    navigate('/watchlist')
  }
  const user1=useContext(AuctionContext)

  const LogOut=async()=>{
    try{
    const data=await axios({
      withCredentials: true,
      method: "get",
      url: "http://localhost:8000/logout",
    })
    user1.current()
  }
    catch(error){
      console.log(error)
    }
  }


  function LogOutHandler(){
    LogOut()
    navigate('/')
  }

  function CreateHandler(){
    navigate('/create')
  }
  const LoginChangeHandler=()=>{
    navigate('/login')
  }


  const RegisterChangeHandler=()=>{
    navigate('/Register')
  }

  if(props.user.sets==true)
  {
    return(
    <>
    <Navbar className='color-nav' variant="dark">
    <Container>
    <Navbar.Brand>Auctions</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={ActiveChangeHandler}>Active Items</Nav.Link>
      <Nav.Link onClick={WatchListHandler}>watchlist</Nav.Link>
      <Nav.Link onClick={CreateHandler}>Create Listings</Nav.Link>
      <Nav.Link onClick={LogOutHandler}>Logout</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#deets">{user1.user.user.username}</Nav.Link>
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
      <Nav.Link onClick={RegisterChangeHandler}>Register</Nav.Link>
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