import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">
          Akeilah Plummer<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Akeilah Plummer</h1>
          <h2>Computer Science Graduate | IT Support & Web Development</h2>
          <p className="description">
            I'm a Computer Science graduate with experience building
            web applications using HTML, CSS, JavaScript, React, and
            Python. I'm interested in IT support, software development,
            troubleshooting technical problems, and using technology
            to solve real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
         I recently earned my Bachelor's degree in Computer Science
        from SUNY Plattsburgh. Through my coursework and projects,
        I've developed experience with programming, web development,
        databases, and problem-solving.
        </p>
        <p>I'm currently building hands-on projects to strengthen my
      skills in frontend development and IT support. I enjoy
      troubleshooting technical problems, learning new
      technologies, and creating applications that are useful
      and easy to use.</p>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>SQL</span>
          <span>GitHub</span>
          <span>Git</span>
          <span>REST APIs</span>
          <span>Responsive Design</span>
          <span>VS Code</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>My Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3> Personal Portfolio Website</h3>

            <p>A responsive personal portfolio website built with
              React, JavaScript, HTML, and CSS to showcase my
              technical skills and projects.</p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
            <div className="project-card">
              <h3>IT Help Desk Ticketing System</h3>
              <p>A help desk application designed to create, organize, 
                prioritize, and track technical support tickets.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="project-card">
              <h3>IT Asset Inventory System</h3>
              <p>
                An application for tracking computers, devices,
                assignments, maintenance records, and other IT assets.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>SQL</span>
              </div>
            </div>


          
        </div>

        
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2>Contact Me</h2>
        <p>I'm open to opportunities in software development, IT support,
          and technology.
        </p>

        <div className="contact-buttons">
          <a href="mailto:akeilahplummer8@gmail.com" className="primary-btn">
            Send me an email</a>

          <a href="/resume.pdf"
            className="secondary-btn"
            target="_blank"
            rel="noopener noferrer"> View My Resume</a>

          <a href="https://github.com/akeilah8/"
             className="secondary-btn"
             target="_blank"
             rel="noopener noreferrer"> Github </a>

          <a href="https://www.linkedin.com/in/akeilah-plummer-62931120a/"
             className="secondary-btn"
             target="_blank"
             rel="noopener noreferrer"> LinkedIn </a>

          
        </div>

        
      </section>

      <footer>
        <p>&copy; 2026 Akeilah Plummer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;