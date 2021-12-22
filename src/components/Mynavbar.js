
import {Navbar, Nav, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const Mynavbar = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Navbar style={{background:"black"}} expand="lg" onSelect={(eventKey) => eventKey=== "home" ? navigate('/') : navigate(`/${eventKey}`)}>
                <Container >
                    <Nav.Link style={{color:"white"}} eventKey="home">Papbu Book | Magazine</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="ms-auto">
                                <Nav.Link style={{color:"white"}} eventKey="todaysdeals">Today's Deals</Nav.Link>
                                <Nav.Link style={{color:"white"}} eventKey="customerservice">Customer Service</Nav.Link>
                                <Nav.Link style={{color:"white"}} eventKey="registry">Registry</Nav.Link>
                                <Nav.Link style={{color:"white"}} eventKey="giftcards">Gift Cards</Nav.Link>
                                <Nav.Link style={{color:"white"}} eventKey="sell">Sell</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
        </div>
    );
};

export default Mynavbar