// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Envelope, GeoAlt, Telephone, Download } from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import me from "../assets/me.jpeg";
import autofix from "../assets/autofix.png";

export default function App() {
  return (
    <div className="bg-white text-dark" style={{ scrollBehavior: "smooth", fontFamily: 'Segoe UI, sans-serif' }}>

      {/* Header */}
      <header className="bg-white shadow-sm py-3 border-bottom border-primary sticky-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h1 className="display-5 fw-bold text-primary mb-3 mb-md-0" style={{ cursor: "default" }}>
            Hyacinthe<span className="text-dark">.</span>
          </h1>
          <nav>
            <ul className="nav nav-pills">
              {["Home", "About", "Services", "TechStack", "Projects", "Contact"].map(link => (
                <li className="nav-item" key={link}>
                  <a href={`#${link.toLowerCase()}`} className="nav-link text-dark fw-semibold px-3">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-5" style={{ background: "#e6f0ff", color: "#003366" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
          <div className="text-center text-md-start">
            <h2 className="display-5 fw-bold mb-3">
              Hello, I'm <span className="text-dark">IHIMBAZWE Hyacinthe</span>
            </h2>
            <p className="lead mb-4" style={{ maxWidth: "480px" }}>
              An aspiring software developer, passionate about solving real-world problems through clean and efficient code.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg shadow-sm rounded-pill">
              View My Work
            </a>
          </div>
          <div>
            <img
              src={me}
              alt="IHIMBAZWE Hyacinthe"
              className="rounded-circle shadow-lg img-fluid"
              style={{ maxWidth: "260px", border: "4px solid #66b2ff", transition: "transform 0.3s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
        </div>
      </section>

 {/* About Section */}
      <section id="about" className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <h3 className="text-center text-primary mb-5 fw-bold">About Me</h3>
          <div className="row align-items-center">
            <div className="col-md-8 offset-md-2 text-secondary fs-5">
              <p> Passionate software developer focused on building user-centered, scalable applications with real-world impact.</p>
              <p> Proficient in modern web technologies including HTML, CSS, JavaScript, PHP, Python, and database systems like MySQL and MongoDB.</p>
              <p>Strong problem-solving skills, a growth mindset, and a commitment to continuous learning. Experienced in both frontend and backend development using frameworks like React, Node.js, and Bootstrap.</p>
              <p>Capable of working independently or collaboratively, with a keen interest in turning ideas into digital solutions that make a difference.</p>
              <a
                href="/mycv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-3"
              >
                <Download className="me-2" /> Download My CV
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-5 border-top border-bottom" style={{ backgroundColor: "#e9f5ff" }}>
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">My Services</h3>
          <div className="row text-center g-4">
            {[{
              title: "Web Development",
              desc: "Building responsive and user-friendly websites tailored to client needs."
            }, {
              title: "Database Design",
              desc: "Efficient and secure databases to store and manage your data."
            }, {
              title: "UI/UX Design",
              desc: "Designing intuitive interfaces that enhance user engagement."
            }].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="text-primary fw-bold mb-3">{service.title}</h5>
                  <p className="text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-5 border-top border-bottom" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container text-center">
          <h3 className="text-primary fw-bold mb-4">Tech Stack</h3>
          <p className="text-secondary mb-4 fs-5">Technologies I work with:</p>
          <div className="row justify-content-center align-items-center g-4">
            {["html", "css", "javascript", "react", "nodejs", "php", "python", "cplusplus"].map((tech, i) => (
              <div className="col-4 col-sm-3 col-md-2 text-center" key={i}>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  className="img-fluid mb-2"
                  style={{ height: "50px", transition: "transform 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div className="text-secondary fw-semibold text-capitalize">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of the component remains unchanged */}


      {/* Projects Section */}
    {/* Projects Section */}
      <section id="projects" className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">My Projects</h3>
          <div className="row g-4">
            {[{
              title: "AutoFix",
              desc: "AutoFix is a modern web platform that connects drivers experiencing car issues with nearby garages. It uses geolocation to calculate the distance between the user and garages, allowing users to send service requests based on proximity. The project aims to simplify emergency vehicle repairs, reduce downtime, and improve safety on the roads.",
              tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Google Maps API"],
              img: autofix,
              link: "https://autofix-qq1k.vercel.app/"
            }, {
              title: "Kurujyejuru Driving School System",
              desc: "This is a comprehensive school management system designed for driving schools. It allows instructors to register students, record attendance, manage payments, schedule exams, and view categorized performance results. The project was built to digitize and simplify administrative tasks for driving academies.",
              tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
              img: logo,
              link: "https://github.com/hyacinthe3/kurujyejuru"
            }].map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="card shadow h-100 border-primary">
                  <img src={project.img} className="card-img-top" alt={project.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold text-primary">{project.title}</h5>
                    <p className="text-secondary small mb-2">{project.desc}</p>
                    <div className="mb-2">
                      <strong className="text-dark">Technologies:</strong>
                      <ul className="list-unstyled mb-2 ms-2">
                        {project.tech.map((tech, i) => (
                          <li key={i} className="text-secondary small">- {tech}</li>
                        ))}
                      </ul>
                    </div>
                    <a href={project.link} className="btn btn-primary btn-sm text-white fw-semibold align-self-start">
                      Review Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white border-top">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Contact Me</h3>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4 mb-md-0 fs-5 text-secondary">
              <p><GeoAlt className="me-3 text-primary" size={28} /> Kigali, Rwanda — KN 7 Ave</p>
              <p><Telephone className="me-3 text-primary" size={28} /> +250 785 394 831</p>
              <p><Envelope className="me-3 text-primary" size={28} /> hyacintheihimbazwe98@gmail.com</p>
            </div>
            <div className="col-md-6">
              <form onSubmit={e => e.preventDefault()} className="p-4 rounded shadow border border-primary">
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control form-control-lg" rows="4" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary text-white fw-bold w-100 shadow">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 mt-5 bg-primary text-white text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Hyacinthe. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-4">
          {[{
            href: "https://twitter.com",
            svgPath: "M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          }, {
            href: "https://linkedin.com",
            svgPath: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z"
          }, {
            href: "https://github.com/hyacinthe3",
            svgPath: "M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 00-1.12-1.48c-.92-.62.07-.6.07-.6a2.1 2.1 0 011.52 1.02 2.12 2.12 0 002.9.83 2.14 2.14 0 01.64-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.86 3.86 0 011.03-2.7 3.6 3.6 0 01.1-2.66s.84-.27 2.75 1.02a9.6 9.6 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 01.1 2.66 3.86 3.86 0 011.03 2.7c0 3.84-2.34 4.68-4.57 4.93a2.4 2.4 0 01.68 1.86v2.76c0 .27.18.59.69.48A10 10 0 0012 2z"
          }].map(({ href, svgPath }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "1.75rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                <path d={svgPath} />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
