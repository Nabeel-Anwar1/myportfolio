import About from "../about/About";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";

const HomePage = () => {
    return <div className="App">
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />

    </div>
}

export default HomePage