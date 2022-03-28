import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import '../css/Header.css';

function Header() {
    return (
        <header className="App-header" id="top">
            <Navbar className="nav-font">
                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to='/' className="nav-element">
                        Главная
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Catalog' className="nav-element">
                        Каталог
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Videos' className="nav-element">
                        Мультфильмы
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Projects' className="nav-element">
                        Наши проекты
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Contacts' className="nav-element">
                        Контакты
                    </Nav.Link>
                    <Navbar.Brand>
                        <img
                            alt="logo"
                            src="/headerLogo.png"
                            className="d-inline-block align-top"
                            style={{ height: "100%", marginLeft: "50px" }}
                        ></img>
                    </Navbar.Brand>
                </Nav>
            </Navbar>
        </header >
    );
}

export default Header
