// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Envelope, GeoAlt, Telephone, Download } from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import me from "../assets/me.jpeg";
import autofix from "../assets/autofix.png";

export default function App() {
  return (
    <div className="bg-white text-dark font-sans" style={{ scrollBehavior: "smooth" }}>

      {/* Header */}
      <header className="bg-white shadow-sm py-3 border-bottom border-info sticky-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h1 className="display-5 fw-bold text-info mb-3 mb-md-0" style={{ cursor: "default" }}>
            Hyacinthe<span className="text-dark">.</span>
          </h1>
          <nav>
            <ul className="nav nav-pills">
              {["Home", "About", "TechStack", "Projects", "Contact"].map(link => (
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
      <section
        id="home"
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #cce7ff 0%, #99ccff 100%)",
          color: "#003366",
        }}
      >
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
          <div className="text-center text-md-start">
            <h2 className="display-5 fw-bold mb-3" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.15)" }}>
              Hello, I'm <span className="text-dark">IHIMBAZWE Hyacinthe</span>
            </h2>
            <p className="lead mb-4" style={{ maxWidth: "480px" }}>
              A recent high school graduate and aspiring developer, passionate about solving real-world problems through clean and efficient code.
            </p>
            <a href="#projects" className="btn btn-gradient btn-lg shadow-sm">
              View My Work
            </a>
          </div>
          <div>
            <img
              src={me}
              alt="IHIMBAZWE Hyacinthe"
              className="rounded-circle shadow-lg img-fluid"
              style={{ maxWidth: "260px", border: "5px solid #99ccff", transition: "transform 0.3s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 border-top border-bottom bg-light">
        <div className="container">
          <h3 className="text-center text-info mb-5 fw-bold">About Me</h3>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-3 mb-md-0">
         
            </div>
            <div className="col-md-8 text-secondary fs-5">
              <p><GeoAlt className="me-2 text-info" size={24} /> Passionate about crafting innovative software solutions.</p>
              <p><Download className="me-2 text-info" size={24} /> Proficient in HTML, CSS, PHP, Python, and database development.</p>
              <p>Always improving, learning, and pushing the limits of what I can build through technology.</p>
              <a
                href="/hyacinthe cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info mt-3"
              >
                <Download className="me-2" /> Download My CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-5 border-top border-bottom" style={{ backgroundColor: "#f8fbff" }}>
        <div className="container text-center">
          <h3 className="text-info fw-bold mb-4">Tech Stack</h3>
          <p className="text-secondary mb-4 fs-5">Technologies I work with:</p>
          <div className="row justify-content-center align-items-center g-4">
            {[{
              name: "HTML",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            }, {
              name: "CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }, {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            }, {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }, {
              name: "React Native",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }, {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }, {
              name: "PHP",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            }, {
              name: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            }, {
              name: "C++",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            }].map(({ name, icon }, i) => (
              <div className="col-4 col-sm-3 col-md-2 text-center" key={i}>
                <img
                  src={icon}
                  alt={name}
                  title={name}
                  className="img-fluid mb-2"
                  style={{ height: "50px", transition: "transform 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div className="text-secondary fw-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="py-4 bg-light border-top border-bottom">
  <div className="container">
    <h3 className="text-center text-info fw-bold mb-4">My Projects</h3>
    <div className="row g-3">
      
      {/* Project 1: AutoFix */}
      <div className="col-md-6">
        <div className="card shadow h-100 border-info">
          <img src={autofix} className="card-img-top" alt="AutoFix" style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex flex-column">
            <h5 className="fw-bold text-info">AutoFix</h5>
            <p className="flex-grow-1 text-secondary small">
              A website that connects drivers in need of repairements with nearby garages and shows distance to reach the garage then request for help
            </p>
            <a href="https://autofix-qq1k.vercel.app/" className="btn btn-info btn-sm text-white fw-semibold align-self-start">Review</a>
          </div>
        </div>
      </div>

      {/* Project 2: Kurujyejuru Driving School System */}
      <div className="col-md-6">
        <div className="card shadow h-100 border-info">
          <img src={logo} className="card-img-top" alt="Kurujyejuru Driving School System" style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex flex-column">
            <h5 className="fw-bold text-info">Kurujyejuru Driving School System</h5>
            <p className="flex-grow-1 text-secondary small">
              Driving Teachers can register students, track attendance, payments, exams, and categorize results.
            </p>
            <a href="https://github.com/hyacinthe3/kurujyejuru" className="btn btn-info btn-sm text-white fw-semibold align-self-start">Review</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white border-top">
        <div className="container">
          <h3 className="text-center text-info fw-bold mb-4">Contact Me</h3>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4 mb-md-0 fs-5 text-secondary">
              <p><GeoAlt className="me-3 text-info" size={28} /> Kigali, Rwanda — KN 7 Ave</p>
              <p><Telephone className="me-3 text-info" size={28} /> +250 785 394 831</p>
              <p><Envelope className="me-3 text-info" size={28} /> hyacintheihimbazwe98@gmail.com</p>
            </div>
            <div className="col-md-6">
              <form onSubmit={e => e.preventDefault()} className="p-4 rounded shadow border border-info">
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
                <button type="submit" className="btn btn-info text-white fw-bold w-100 shadow">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

       <footer className="py-4 mt-5" style={{ backgroundColor: "#003366", color: "white", textAlign: "center" }}>
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

      {/* Extra Styles for gradient button */}
      <style>{`
        .btn-gradient {
          background: linear-gradient(45deg,#7a33ff, #66ccff);
          color: white;
          border: none;
          transition: background 0.4s ease;
        }
        .btn-gradient:hover {
          background: linear-gradient(45deg, #007acc, #3399ff);
          color: white;
        }
      `}</style>
    </div>
  );
}