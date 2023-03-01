import "./Navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <p>
                <a href="#about-me" >About Me</a>
            </p>
            <p>
                <a href="#my-skills">My Skills</a>
            </p>
            <p>
                <a href="#my-projects">Projects</a>
            </p>
            <p>
                <a href="#my-experience">Experience</a>
            </p>
            <p>
                <a href="#contact">Contact</a>
            </p>
        </>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gtr-navbar">
            <div className="gtr-navbar-links">
                <div className="gtr-navbar-links-logo">
                    <h1>{"</>"}</h1>
                </div>
            </div>
            <div className="gtr-navbar-sign">
                {/* <p>Sign In</p>
                <button type={"button"}>Sign Up</button> */}
                <Menu />
            </div>
            <div className="gtr-navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color={"white"}
                        size={26}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color={"white"}
                        size={26}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div
                        className={"gtr-navbar-menu-container scale-up-center"}
                    >
                        <div className={"gtr-navbar-menu-container-links"}>
                            <Menu />
                            {/* <div className="gtr-navbar-menu-container-links-sign">
                                <p>Sign In</p>
                                <button type={"button"}>Sign Up</button>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
