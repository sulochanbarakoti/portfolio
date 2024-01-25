import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeSection from "./components/home";
import { Navbar, Container, Nav } from "react-bootstrap";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar expand="lg" style={{ backgroundColor: "lightskyblue" }}>
        <Container>
          <Navbar.Brand className="ms-5 fw-bold" href="#">
            Sulochan Barakoti
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-center fw-semibold"
              style={{ flex: "auto" }}
            >
              <Nav.Link onClick={() => scrollToSection("home")} href="#">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("education")} href="#">
                Education
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("projects")} href="#">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("experience")} href="#">
                Experience
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")} href="#">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Sections */}
      <section id="home">
        <HomeSection />
      </section>

      <section id="education">
        <Education />
        {/* Your about content goes here */}
      </section>

      <section id="experience">
        <Experience />
        {/* Your projects content goes here */}
      </section>

      <section id="projects">
        <Projects />
        {/* Your projects content goes here */}
      </section>

      <section id="contact">
        <div>Contact Section</div>
        {/* Your contact content goes here */}
      </section>
    </div>
  );
}

export default App;
