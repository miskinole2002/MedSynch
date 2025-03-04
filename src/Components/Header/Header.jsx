
import Image from 'react-bootstrap/Image';
import styles from "./Header.module.scss"

import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';




const Header=()=> {




    
    return<>


  
   
  

    <Navbar className='navbar-expand-md sticky-top ' bg="light" data-bs-theme="light">
        <Container>
   <Image className={` p-10 ${styles.img}`} src="/images/MedSync1.png" roundedCircle />

          <Navbar.Brand href="#home">MedSynch</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/Auth" >Connexion</Nav.Link>
            <Nav.Link href="/Insc">Inscription</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </>
}




export default Header

