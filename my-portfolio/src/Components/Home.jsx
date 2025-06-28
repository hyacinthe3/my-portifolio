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
} from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import me from "../assets/me.jpeg";
import autofix from "../assets/autofix.png";

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-white text-dark"
      style={{ scrollBehavior: "smooth", fontFamily: "Poppins, sans-serif" }}
    >
      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
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
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            transition: "0.3s",
          }}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Navigation Bar */}
      <header className="bg-white shadow-sm py-3 sticky-top" style={{ zIndex: 998 }}>
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <h1 className="fw-bold text-primary fs-3">Hyacinthe<span className="text-dark">.</span></h1>
          <nav className="d-none d-md-block">
            <ul className="nav nav-pills">
              {["Home", "About", "TechStack", "Services", "Projects", "Contact"].map(link => (
                <li className="nav-item" key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="nav-link text-dark fw-semibold px-3"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center py-5"
        style={{ minHeight: "100vh", background: "linear-gradient(to right, #e0f7fa, #e1f5fe)" }}
      >
        <div className="container">
          <img
            src={me}
            alt="IHIMBAZWE Hyacinthe"
            className="rounded-circle shadow-lg mb-4 img-fluid"
            style={{ maxWidth: "180px", border: "4px solid #66b2ff" }}
          />
          <h2 className="fw-bold display-4 mb-3">
            Hey there, I'm <span className="text-primary">IHIMBAZWE Hyacinthe</span>
          </h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            A creative and solution-driven software developer passionate about building intuitive, user-focused digital experiences that make an impact.
          </p>
          <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-4">
            🚀 Explore My Work
          </a>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Who I Am</h3>
          <div className="row justify-content-center">
            <div className="col-md-8 fs-5 text-secondary">
              <p>👋 I'm a curious full-stack developer with a mission to craft elegant, efficient, and meaningful software solutions.</p>
              <p>🌍 I specialize in both frontend and backend development, leveraging modern frameworks and tools to turn concepts into production-ready applications.</p>
              <p>💡 I thrive in collaborative environments and love challenges that push me to grow technically and creatively.</p>
              <a
                href="/mycv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-3"
              >
                <Download className="me-2" /> Grab My CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-5 bg-light border-top border-bottom">
        <div className="container text-center">
          <h3 className="text-primary fw-bold mb-4">Technology Arsenal</h3>
          <p className="text-secondary fs-5 mb-4">These are the tools and languages I use to bring digital ideas to life:</p>
          <div className="row row-cols-3 row-cols-sm-4 row-cols-md-6 g-4 justify-content-center">
            {["html", "css", "javascript", "react", "nodejs", "php", "python", "cplusplus"].map((tech, i) => (
              <div className="col" key={i}>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  className="img-fluid mb-2"
                  style={{ height: "48px", transition: "transform 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div className="text-muted text-capitalize small fw-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-light border-top border-bottom" data-aos="fade-left">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">What I Do</h3>
          <div className="row text-center g-4">
            {[
              { title: "Web Development", desc: "Modern, responsive web apps that look great on any device." },
              { title: "Database Design", desc: "Robust, secure, and scalable data architectures." },
              { title: "UI/UX Design", desc: "Simple, clean designs that prioritize user experience." },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="p-4 rounded shadow-sm h-100 bg-white border-start border-4 border-primary">
                  <h5 className="fw-bold text-primary mb-2">{service.title}</h5>
                  <p className="text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5 bg-white border-top border-bottom" data-aos="zoom-in">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Featured Projects</h3>
          <div className="row g-4">
            {[{
              title: "AutoFix",
              desc: "Find and contact nearby garages using geolocation. Ideal for roadside emergencies.",
              tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Google Maps API"],
              img: autofix,
              link: "https://autofix-qq1k.vercel.app/"
            }, {
              title: "Kurujyejuru School System",
              desc: "Admin panel to manage driving school operations including exams, students, and payments.",
              tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
              img: logo,
              link: "https://github.com/hyacinthe3/kurujyejuru"
            }].map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <img src={project.img} className="card-img-top" alt={project.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">{project.title}</h5>
                    <p className="text-muted">{project.desc}</p>
                    <strong>Tools Used:</strong>
                    <ul className="list-unstyled ms-3 small text-muted">
                      {project.tech.map((tech, i) => <li key={i}>• {tech}</li>)}
                    </ul>
                    <a href={project.link} className="btn btn-outline-primary btn-sm mt-2" target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light border-top" data-aos="fade-up">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Contact Me</h3>
          <div className="row justify-content-center">
            <div className="col-md-5 fs-5 text-secondary mb-4">
              <p><GeoAlt className="me-2 text-primary" /> Kigali, Rwanda</p>
              <p><Telephone className="me-2 text-primary" /> +250 785 394 831</p>
              <p><Envelope className="me-2 text-primary" /> hyacintheihimbazwe98@gmail.com</p>
            </div>
            <div className="col-md-6">
              <form className="p-4 shadow-sm border rounded bg-white">
                <input type="text" className="form-control mb-3" placeholder="Your Name" required />
                <input type="email" className="form-control mb-3" placeholder="Your Email" required />
                <input type="text" className="form-control mb-3" placeholder="Subject" required />
                <textarea rows="4" className="form-control mb-3" placeholder="Message" required></textarea>
                <button className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-primary text-white text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Hyacinthe. All rights reserved.</p>
      </footer>

      
    </div>
  );
}
