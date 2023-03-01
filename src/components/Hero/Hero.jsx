import { Button } from "react-bootstrap";
import hero from "../../assets/hero1.png";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content-div px-4">
                    <p>Hi There.!</p>
                    <p>My Name is</p>
                    <h1>NIRAJ KHARE</h1>
                    <h1>I BUILD WEB APPLICATIONS.</h1>
                    <p>
                        I am a Software Engineer specializing in building web
                        application using the MERN stack. Currently, I work as a
                        freelancer.
                    </p>
                    <div>
                        <a href="#about-me">
                            <Button>More about me</Button>
                        </a>
                    </div>
                </div>
                <div className="hero-image-div my-2">
                    <img className="hero-image" src={hero} alt="hero" />
                </div>
            </div>
        </>
    );
};

export default Hero;
