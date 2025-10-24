// src/App.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Envelope,
  GeoAlt,
  Telephone,
  Download,
  ArrowUp,
  List,
} from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import me from "../assets/me.jpeg";
import autofix from "../assets/autofix.png";

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMsg("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMsg("⚠️ Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-white text-dark"
      style={{ scrollBehavior: "smooth", fontFamily: "Poppins, sans-serif" }}
    >
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "12px",
            zIndex: 999,
            boxShadow: "0 0 12px rgba(0,0,0,0.3)",
          }}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Navbar */}
      <header
        className="bg-white shadow-sm py-3 sticky-top"
        style={{ zIndex: 998 }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="fw-bold text-primary fs-3 m-0">
            Hyacinthe<span className="text-dark">.</span>
          </h1>
          {/* Desktop Nav */}
          <nav className="d-none d-md-block">
            <ul className="nav nav-pills">
              {["Home", "About", "TechStack", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li className="nav-item" key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="nav-link text-dark fw-semibold px-3"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          {/* Mobile Toggle */}
          <button
            className="btn btn-outline-primary d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <List size={22} />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-white border-top d-md-none">
            <ul className="nav flex-column p-3">
              {["Home", "About", "TechStack", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li className="nav-item" key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="nav-link text-dark fw-semibold py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      {/* Hero */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center py-5"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #e0f7fa, #e1f5fe)",
        }}
      >
        <div className="container">
          <img
            src={me}
            alt="IHIMBAZWE Hyacinthe"
            className="rounded-circle shadow-lg mb-4 img-fluid"
            style={{ maxWidth: "160px", border: "4px solid #66b2ff" }}
          />
          <h2 className="fw-bold display-5 mb-3">
            Hey there, I'm{" "}
            <span className="text-primary">IHIMBAZWE Hyacinthe</span>
          </h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            A creative and solution-driven software developer passionate about
            building intuitive, user-focused digital experiences that make an
            impact.
          </p>
          <a
            href="#projects"
            className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
          >
            🚀 Explore My Work
          </a>
        </div>
      </section>

    {/* About */}
<section id="about" className="py-5 bg-white border-top border-bottom">
  <div className="container">
    <h3 className="text-center text-primary fw-bold mb-4">Who I Am</h3>
    <div className="row justify-content-center">
      <div className="col-md-8 fs-5 text-secondary text-center text-md-start">
        <p>
          👋 Hi! I'm a passionate full-stack developer driven by curiosity and a love 
          for building impactful digital solutions. I enjoy transforming ideas into 
          functional, user-friendly and scalable, applications that solve real problems.
        </p>
        <p>
          🌍 I work across both <strong>frontend and  backend development,  </strong>
      using modern technologies like React, Node.js, PHP, and MongoDB. Whether it’s designing clean UI, 
          engineering secure APIs, or optimizing performance, I’m committed to writing
          clean, maintainable, and  efficient  code.
        </p>
        <p>
          💡 I value  collaboration, continuous learning, and  innovation. Challenges
      excite me—especially those that help me grow technically and  creatively
    while making a meaningful impact.
        </p>
        <a
          href="/mycv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary mt-3"
        >
          <Download className="me-2" /> View My CV
        </a>
      </div>
    </div>
  </div>
</section>


   {/* Tech Stack */}
<section id="techstack" className="py-5 bg-light border-top border-bottom">
  <div className="container text-center">
    <h3 className="text-primary fw-bold mb-4">Technology Arsenal</h3>
    <p className="text-secondary fs-5,  mb-4">
      Tools and technologies I use to build, create, and innovate:
    </p>

    {/* Programming  &  Web Languages */}
    <h5  className="fw-bold text-dark mt-4">Programming Languages</h5>
    <div className="row row-cols-3 row-cols-sm-4 row-cols-md-6 g-4 justify-content-center">
      {[
        { name: "python", label: "Python" },
        { name: "cplusplus", label: "C++" },
        { name: "c", label: "C" },
        { name: "javascript", label: "JavaScript" },
        { name: "typescript", label: "TypeScript" },
      ].map((tech, i) => (
        <div className="col" key  ={i}>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
            alt={tech.label}
            className="img-fluid mb-2"
            style={{ height: "48px", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="text-muted small fw-semibold">{tech.label}</div>
        </div>
      ))}
    </div>

    {/* Web Development */}
    <h5 className="fw-bold text-dark mt-5">Web Development</h5>
    <div className="row row-cols-3 row-cols-sm-4 row-cols-md-6 g-4 justify-content-center">
      {[
        { name: "html5", label: "HTML" },
        { name: "css3", label: "CSS" },
        { name: "javascript", label: "JavaScript" },
      ].map((tech, i) => (
        <div className="col" key  ={i}>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
            alt={tech.label}
            className="img-fluid mb-2"
            style={{ height: "48px", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="text-muted small fw-semibold">{tech.label}</div>
        </div>
      ))}
    </div>

    {/* Frameworks */}
    <h5 className="fw-bold text-dark mt-5">Frameworks & Libraries</h5>
    <div className ="row row-cols-3 row-cols-sm-4 row-cols-md-6 g-4 justify-content-center">
      {[
        { name: "nodejs", label: "Node.js" },
        { name: "react", label: "React.js" },
        { name: "react", label: "React Native" },
        { name: "nextjs", label: "Next.js" },
        { name: "laravel", label: "Laravel 11" },
      ].map((tech, i) => (
        <div className="col" key   ={i}>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
            alt={tech.label}
            className="img-fluid mb-2"
            style={{ height: "48px", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className= "text-muted small fw-semibold">{tech.label}</div>
        </div>
      ))}
    </div>

    {/* Version Control & Tools */}
    <h5 className="fw-bold text-dark mt-5">Version Control & Tools</h5>
    <div className="row row-cols-3 row-cols-sm-4 row-cols-md-6 g-4 justify-content-center">
      {[
        { name: "git", label: "Git" },
        { name: "github", label: "GitHub" },
        { name: "microsoft", label: "MS Office", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
      ].map((tech, i) => (
        <div className="col" key={i}>
          <img
            src={tech.icon || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
            alt={tech.label}
            className="img-fluid mb-2"
            style={{ height: "48px", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="text-muted small fw-semibold">{tech.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Services Section */}
<section
  id="services"
  className="py-5 bg-light border-top border-bottom"
  data-aos="fade-left"
>
  <div className="container">
    <h3 className="text-center text-primary fw-bold mb-4">What I Offer</h3>
    <p className="text-center text-secondary mb-5 fs-5">
      I build digital solutions that are scalable, user-focused, and crafted to solve real-world problems.
    </p>
    <div className="row text-center g-4">
      {[
        {
          title: "Web Development",
          desc: "I design and develop fast, secure, and fully responsive websites using modern technologies like React, Node.js, and Next.js — ensuring seamless performance across all devices.",
        },
        {
          title: "Database & Backend Architecture",
          desc: "I create efficient, secure, and (scalable database systems and RESTful APIs) using tools such as MySQL, MongoDB, PHP, and Node.js to ensure smooth data flow and reliability.",
        },
        {
          title: "UI/UX Design",
          desc: "I craft intuitive, clean, and visually engaging (user interfaces) that make products easy to use and enjoyable, focusing on both aesthetics and usability.",
        },
      ].map((service, index) => (
        <div className="col-md-4" key={index}>
          <div className="p-4 rounded shadow-sm h-100 bg-white border-start border-4 border-primary service-card"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h5 className="fw-bold text-primary mb-2">{service.title}</h5>
            <p className="text-secondary">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Projects */}
<section
  id="projects"
  className="py-5 bg-white border-top border-bottom"
  data-aos="zoom-in"
>
  <div className="container">
    <h3 className="text-center text-primary fw-bold mb-4">
      Featured Projects
    </h3>
    <p className="text-center text-secondary mb-5 fs-5  ">
      A  showcase of projects that demonstrate my ability to build practical, user-focused, and scalable digital solutions.
    </p>

    <div className="row g-4">
      {[
        {
          title: "AutoFix",
          desc: "A geolocation-based platform that connects drivers with nearby garages in emergencies. Features request tracking, authentication, and distance-based garage suggestions.",
          tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Google Maps API"],
          img: autofix,
          link: "https://autofix-qq1k.vercel.app/",
        },
        {
          title: "Kurujyejuru School System",
          desc: "A full-featured administration system for a driving school that manages students, exams, instructors, payments, and reports with ease and accuracy.",
          tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
          img: logo,
          link: "https://github.com/hyacinthe3/kurujyejuru",
        },
      ].map((project, index) => (
        <div className="col-md-6" key={index}>
          <div
            className="card h-100 shadow-sm border-0"
            style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={project.img}
              className="card-img-top"
              alt={project.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="fw-bold text-primary">{project.title}</h5>
              <p className="text-muted">{project.desc}</p>
              <strong>Technologies Used:</strong>
              <ul className="list-unstyled ms-3 small text-muted">
                {project.tech.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
              <a
                href={project.link}
                className="btn btn-outline-primary btn-sm mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section
        id="contact"
        className="py-5 bg-light border-top"
        data-aos="fade-up"
      >
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Contact Me</h3>
          <div className="row justify-content-center">
            <div className="col-md-5 fs-5 text-secondary mb-4 text-center text-md-start">
              <p>
                <GeoAlt className="me-2 text-primary" /> Kigali, Rwanda
              </p>
              <p>
                <Telephone className="me-2 text-primary" /> +250 785 394 831
              </p>
              <p>
                <Envelope className="me-2 text-primary" />{" "}
                hyacintheihimbazwe98@gmail.com
              </p>
            </div>
            <div className="col-md-6">
              <form
                className="p-4 shadow-sm border rounded bg-white"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Subject"
                  required
                />
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary w-100 shadow-sm"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {responseMsg && (
                  <p className="mt-3 text-center">{responseMsg}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-primary text-white text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Hyacinthe All rights reserved.
        </p>
      </footer>
    </div>
  );
}
