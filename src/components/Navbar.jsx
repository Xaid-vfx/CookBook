import React from 'react'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

export default function Navbarm() {


  const navigate=useNavigate()
  const [error,seterror]= useState()

  const style1={
    'display':'flex',
    'justifyContent':'center',
    'width':'100%'
  }
  const style2={
    'border-radius':'20px',
    'border':'1px solid',
    'padding-inline':'10px',
    'background-color':'white'
    
  }
  const style3={
    'border-radius':'20px',
    'border':'1px ',
    'padding-inline':'10px',
    'background-color':'white'
  }


  const logout = async (e) => {
    e.preventDefault()
    try {
      
       await signOut(auth)
       console.log('signed out');
       navigate('/')
    }
    catch (error) {
       seterror('error')
       console.log(error);
    }
 }
  return (


//     <div style={style1}>
//        <input style={style2}type="text" placeholder="Search.."></input>
//        <button style={style3} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
// </svg>
// </button>
//     </div>




    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <h3 style={{'display':'flex','align-items':'center'}}><svg 
        style={{'margin-right':'10px'}}
        xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg> CookBook</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link as={Link} to='/Welcome'>Home</Nav.Link>
            <Nav.Link as={Link} to='/MyRecipe'>MyRecipes</Nav.Link>
            <Nav.Link as={Link} to='/Use'>How to Use?</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <div className='parent'>
            <Button onClick={logout} variant="btn btn-danger">Logout</Button>
          
            
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>






  )
}
