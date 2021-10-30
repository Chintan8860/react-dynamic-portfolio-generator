import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../actions/UserActions";
import { portfolioFilesGenerator } from '../common/commonFunction';
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLoginPortFolio = useSelector((state) => state.userLoginPortFolio);
  const { userInfo } = userLoginPortFolio;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  console.log(userInfo.firstName);

  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">PortFolio App</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {userInfo ? (
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link to="/templates">Home</Link>
                </Nav.Link>
                <NavDropdown
                  title={`${userInfo?.firstName}  ${userInfo?.lastName}`}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item>
                    {" "}
                    <Link to="profile">Profile</Link>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </Nav>
            )}
            <Nav onClick={portfolioFilesGenerator}>
              <Nav.Link>Download Files</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
