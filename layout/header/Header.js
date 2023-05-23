import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/logos/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
            {/* Continuum Block */}
              <Image 
                height={60}
                width={160}
                src={logo} alt="Continuum Block" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar className="hover-dropdown ml-auto" id="h6-info">
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-muted nav-link"
                          : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/explore-courses">
                    <a
                      className={
                        router.pathname == "/explore-courses"
                          ? "text-muted nav-link"
                          : "nav-link"
                      }
                    >
                      Explore Courses
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about-us">
                    <a
                      className={
                        router.pathname == "/about-us"
                          ? "text-muted nav-link"
                          : "nav-link"
                      }
                    >
                      About Us
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact-us">
                    <a
                      className={
                        router.pathname == "/contact-us"
                          ? "text-muted nav-link"
                          : "nav-link"
                      }
                    >
                      Contact Us
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <NavLink
                  href=" "
                  className="btn btn-purple font-14"
                  target="_blank"
                >
                  Download Free Courses
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
