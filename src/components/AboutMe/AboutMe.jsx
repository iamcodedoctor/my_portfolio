import hero from "../../assets/hero.webp";
import { Button } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <>
            <div className="section my-4" id="about-me">
                <h1 className="my-4 title">About Me</h1>
                <div className="content">
                    <div className="my-2 image-div">
                        <img className="hero-image" src={hero} alt="hero" />
                    </div>
                    <div className="content-info p-4">
                        <p>
                            Hello! My name is Niraj and I enjoy creating things
                            that live on the internet. My interest in web
                            development started back in 2017 when I was just in
                            high School and creating little web apps just with
                            html and css was fascatinating. The idea of creating
                            somthing from scratch just fascinates me a lot.
                        </p>
                        <p>
                            Fast-forward to today, Now I am a software Engineer
                            who can do much more than just html and css. My main
                            focus now is create much more complex secure and
                            reactive web application with the help of latest
                            technologies in market.
                        </p>
                        <p>
                            I am well versed in creating a full stack web
                            application, that is working with the client side
                            code, server side code and noSql databases.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
