import { Link } from "react-router-dom";
import Brandicon from "../BrandIcon";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Fade } from "react-awesome-reveal";

interface HeaderProps {
  pathname?: string;
}

export default function Header({ pathname = "/" }: HeaderProps) {
  //
  const getNavLinkClass = (path: string) => {
    return path === pathname ? " active" : "";
  };

  return (
    <Fade>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to={"/"}>
              <Brandicon />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar">
              <Nav className="navbar-nav me-5" style={{ marginLeft: "auto" }}>
                <Link
                  to={"/"}
                  className={`nav-item nav-link ${getNavLinkClass("/")}`}
                >
                  Home
                </Link>
                <Link
                  to={"/browse-by"}
                  className={`nav-item nav-link  ${getNavLinkClass(
                    "/browse-by"
                  )}`}
                >
                  Browse by
                </Link>
                <Link
                  to={"/stories"}
                  className={`nav-item nav-link  ${getNavLinkClass(
                    "/stories"
                  )}`}
                >
                  Stories
                </Link>
                <Link
                  to={"/agents"}
                  className={`nav-item nav-link  ${getNavLinkClass("/agents")}`}
                >
                  Agents
                </Link>
                {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/browse-by">Browse by</Nav.Link>
            <Nav.Link href="/stories">Stories</Nav.Link>
            <Nav.Link href="/agent">Agents</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fade>
  );
}
