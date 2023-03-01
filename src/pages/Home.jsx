import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import MySkills from "../components/MySkills/MySkills";
import Navbar from "../components/Nav/Navbar";
import Projects from "../components/Projects/Projects";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <MySkills />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
};

export default Home;
