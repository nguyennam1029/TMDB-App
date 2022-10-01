import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { seachrItem } from "../../redux/action";
import { useEffect } from "react";
import {
  IoSearchOutline,
  IoNotificationsSharp,
  IoPerson,
  IoSearchSharp,
} from "react-icons/io5";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Container } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./header.css";
const Header = ({ genres }) => {
  console.log(genres);
  const NavItemLinks = [
    {
      display: "Moive",
      url: "/moive",
    },
    {
      display: "TV Shows",
      url: "/tvshows",
    },
    {
      display: "People",
      url: "/people",
    },
    {
      display: "More",
      url: "/More",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="header">
      <Container>
        <div className="nav d-flex align-items-center justify-content-between">
          <div className="nav__left d-flex align-items-center justify-content-center mr-3">
            <NavLink to="/" className="nav__left--img d-block">
              <img src={logo} alt="" />
            </NavLink>

            <ul className="nav__list d-flex align-items-center gap-4">
              {NavItemLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}

              <li>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret size="lg">
                    Thể loại
                  </DropdownToggle>
                  <DropdownMenu>
                    {genres &&
                      genres.map((item) => {
                        return (
                          <NavLink to="vcl" key={item.id}>
                            {item.name}
                          </NavLink>
                        );
                      })}
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <ul className="nav__list d-flex align-items-center gap-4">
              <li className="nav__item nav__right--item">
                <NavLink
                  to="en"
                  className={(navClass) => (navClass.isActive ? "active" : "")}
                >
                  EN
                </NavLink>
              </li>

              <li className="nav__item nav__right--item">
                <NavLink
                  to="noti"
                  className={(navClass) => (navClass.isActive ? "active" : "")}
                >
                  <IoNotificationsSharp />
                </NavLink>
              </li>

              <li className="nav__item nav__right--item">
                <NavLink
                  to="user"
                  className={(navClass) => (navClass.isActive ? "active" : "")}
                >
                  <IoPerson />
                </NavLink>
              </li>

              <li className="nav__item nav__right--item search">
                <NavLink
                  to="user"
                  className={(navClass) => (navClass.isActive ? "active" : "")}
                >
                  <IoSearchSharp />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Header;
