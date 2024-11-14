import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import AllPropertiesCards from '../user/AllPropertiesCards';
import '../../App.css';



const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };
   return (
      <>
      
      <Navbar expand="lg" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
        <Container fluid>
          <Navbar.Brand>
            <h2 className="multicolor-text">RentEase</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {/* Additional Nav items can go here if needed */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={'/'} style={{  fontSize: "18px", fontWeight: "500", margin: "0 10px" }}>
              🏚️Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/login'} style={{  fontSize: "18px", fontWeight: "500", margin: "0 10px" }}>
              🔐Login
              </Nav.Link>
              <Nav.Link as={Link} to={'/register'} style={{  fontSize: "18px", fontWeight: "500", margin: "0 10px" }}>
              📝Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      


         <div className='home-body'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     src={p1}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p2}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p3}
                     alt="Third slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     src={p4}
                     alt="Fourth slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>


         <div className='property-content'>
            <div className='text-center'>
               <h1 className='m-1 p-5'>All Properties that may you look for</h1>
               <p style={{fontSize: 15, fontWeight: 800}}>Want to post your Property? <Link to={'/register'}><Button variant='outline-info'>Register as Owner</Button></Link></p>
            </div>

            <Container>
               <AllPropertiesCards />
            </Container>
         </div>
      </>
   )
}

export default Home
