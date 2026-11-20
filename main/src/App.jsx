
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  X,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  Menu
} from "lucide-react";
import { siteConfig } from "./config.js";

const skills = [
  { name: "Firebase Firestore", category: "Database", note: "NoSQL database" },
  { name: "MySQL", category: "Database", note: "Relational database" },
  { name: "Python", category: "Programming", note: "Programming language" },
  { name: "JavaScript", category: "Programming", note: "Programming language" },
  { name: "HTML", category: "Web development", note: "Markup" },
  { name: "CSS", category: "Web development", note: "Styling and layouts" }
];

const projects = [
  {
    id: "sjc-care",
    name: "SJC Care",
    type: "Student Counseling Appointment System",
    status: "Revisions ongoing",
    year: "2026–Present",
    featured: true,
    summary:
      "An appointment system concept that allows Junior High School students to book guidance sessions with their preferred Guidance Counselors.",
    overview:
      "SJC Care is a student counseling appointment system developed for St. Joseph College - Olongapo's Student Development and Counseling Center (SDCC), specifically for the Junior High School department. The system aims to provide students with a more organized and accessible way to schedule guidance counseling sessions with their preferred Guidance Counselors. Its initial scope was limited to the Junior High School department rather than the entire institution.",
    role: "Initial Database Designer and Initial Implementation Lead",
    beneficiary:
      "St. Joseph College - Olongapo, Inc. — Student Development and Counseling Center (SDCC), Junior High School Department",
    sections: [
      {
        heading: "Project Objectives",
        body:
          "The project aims to improve the process of scheduling guidance counseling appointments. It seeks to make requesting sessions more convenient for students while helping the SDCC manage appointment arrangements more systematically."
      },
      {
        heading: "Target Users and Beneficiary",
        body:
          "The primary users are St. Joseph Junior High School students who wish to schedule counseling sessions and the counselors who handle those appointments. The project beneficiary is the Student Development and Counseling Center of St. Joseph College - Olongapo, Inc., specifically its Junior High School department."
      },
      {
        heading: "My Contributions",
        body:
          "I was initially named the team's Implementation Lead and designed the initial database structure of the system. My contributions focused on database planning and initial implementation. As the project progressed, further revisions became necessary based on feedback received. These ongoing revisions are currently being handled by our Team Lead."
      },
      {
        heading: "Development Considerations",
        body:
          "The team considered suggestions and recommendations from both the evaluation panel and the project beneficiary. One significant concern was student confidentiality, since the center handles sensitive personal information. This concern was taken into account when planning the system's revisions and considering the appropriate handling of student information."
      },
      {
        heading: "Lessons Learned",
        body:
          "Working on SJC Care highlighted the importance of understanding the needs of intended users and beneficiaries. It also reinforced the significance of database planning and confidentiality, particularly when handling information related to student counseling. Software development involves more than implementing features; it also requires considering the responsibilities and concerns associated with the environment in which a system will be used."
      }
    ],
    repository: siteConfig.sjcCareRepository,
    repositoryLabel: "SJC Care repository",
    stack: []
  },
  {
    id: "ecosort",
    name: "EcoSort",
    type: "Image-Based Waste Classification System",
    status: "Shelved",
    year: "2026",
    featured: false,
    summary:
      "An image-based waste identification system that uses transfer learning with a Convolutional Neural Network (CNN) to classify waste images and suggest appropriate disposal methods.",
    note:
      "During development, the model produced inaccurate predictions. Further improvements are needed, so the project is currently shelved.",
    repository: "https://github.com/althea-esposo/EcoSort.git",
    repositoryLabel: "EcoSort Repository",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "CNN",
      "TensorFlow",
      "Transfer Learning"
    ]
  }
];

function isPlaceholder(url) {
  return (
    !url ||
    url === "#" ||
    url.includes("YOUR_") ||
    url.includes("yourusername")
  );
}

function ExternalLinkOrText({
  href,
  children,
  className = "",
  label
}) {
  if (isPlaceholder(href)) {
    return (
      <span
        className={`link-placeholder ${className}`}
        title="Add your actual URL in src/config.js"
      >
        {children || label || "Link to be added"}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);
  const emailHref = `mailto:${siteConfig.email}`;

  const githubUsername = isPlaceholder(siteConfig.github)
    ? "GitHub profile"
    : `@${siteConfig.github.replace(/\/+$/, "").split("/").pop()}`;

  const sjcCare = projects.find(
    (project) => project.id === "sjc-care"
  );

  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <a
          className="wordmark"
          href="#home"
          aria-label="Althea, back to home"
          onClick={closeMenu}
        >
          <span className="brand-mark">A<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />

          <div className="hero-center">
            <h1 id="hero-title">A V E</h1>
            <p className="hero-subtitle">
              Curious about data. Interested in building useful things
              <span>.</span>
            </p>
          </div>

          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>

          <span className="hero-index">01 / 04</span>
        </section>

        <section className="intro section-shell" aria-labelledby="intro-title">
          <div className="section-tag">
            <span>01</span> / INTRODUCTION
          </div>

          <div className="intro-copy">
            <p className="code-mark">&gt;_</p>
            <h2 id="intro-title">
              Hi,<br />I’m <em>Althea</em><span className="period">.</span>
            </h2>
            <p className="intro-note">
              A student and aspiring developer with a particular interest
              in databases, information organization, and building useful
              digital systems.
            </p>
            <a className="text-link" href="#about">
              GET TO KNOW ME <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section
          className="about section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-tag">
            <span>02</span> / ABOUT AND SKILLS
          </div>

          <div className="section-heading">
            <p className="code-mark">&lt; about / &gt;</p>
            <h2 id="about-title">
              About <em>Me</em><span className="period">.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                My name is Althea, and I'm currently a student with a
                growing interest in web development and database management.
              </p>
              <p>
                I enjoy working with databases, organizing information,
                and understanding how systems store and manage data.
                I'm familiar with Firebase Firestore and MySQL, alongside
                HTML, CSS, and JavaScript for web development.
              </p>
              <p className="small-note">
                Interested in learning, improving, and building with purpose.
              </p>
            </div>

            <aside className="about-snapshot" aria-label="Technical profile summary">
              <div className="snapshot-top">
                <span>2026</span>
                </div>
                <div className="snapshot-content">
                  <h3>Althea.</h3>
                  <p>Student · Aspiring Developer</p>
                  </div>

  <div className="snapshot-divider" />

  <div className="snapshot-details">
    <span className="snapshot-label">AREAS OF INTEREST</span>
    <div className="snapshot-tags">
      <span>Database Management</span>
      <span>Web Development</span>
      <span>Information Systems</span>
    </div>
  </div>

  <div className="snapshot-divider" />

  <div className="snapshot-tech">
    <span className="snapshot-label">CURRENTLY WORKING WITH</span>
    <p>MySQL · Firebase · Python</p>
  </div>
</aside>
          </div>

          <div className="skills-area">
            <div className="skills-heading">
              <div>
                <p className="code-mark">&lt; toolbox / &gt;</p>
                <h3>Technical Toolkit<span className="period">.</span></h3>
              </div>
              <p>
                My current areas of experience and learning, with database
                technologies as my primary interest.
              </p>
            </div>

            <div className="skill-groups">
              <div className="skill-group-label">
                <Database size={17} />
                <span>DATABASES</span>
                <span className="focus-label">PRIMARY INTEREST</span>
              </div>

              <div className="skill-grid database-grid">
                {skills
                  .filter((skill) => skill.category === "Database")
                  .map((skill, index) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-number">0{index + 1}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.note}</span>
                    </div>
                  ))}
              </div>

              <div className="skill-group-label secondary-label">
                <Code2 size={17} />
                <span>WEB DEVELOPMENT & PROGRAMMING</span>
              </div>

              <div className="skill-grid">
                {skills
                  .filter((skill) => skill.category !== "Database")
                  .map((skill, index) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-number">0{index + 1}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.note}</span>
                    </div>
                  ))}
              </div>
            </div>

            <p className="skills-footnote">
              Skill list reflects technologies I have worked with; it does
              not imply equal proficiency across all tools.
            </p>
          </div>
        </section>

        <section
          className="projects section-shell"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-tag">
            <span>03</span> / SELECTED WORK
          </div>

          <div className="section-heading">
            <p className="code-mark">&lt; selected work / &gt;</p>
            <h2 id="projects-title">
              My Projects<span className="period">.</span>
            </h2>
            <p className="section-description">
              Explore my project work, development experience, and
              available source code.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card-${index + 1}`}
                key={project.id}
              >
                <div className="project-card-top">
                  <span>
                    0{index + 1} / {project.featured ? "FEATURED PROJECT" : "PROJECT"}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-visual" aria-hidden="true">
                  {project.featured ? (
                    <Database size={38} strokeWidth={1.2} />
                  ) : (
                    <Layers3 size={38} strokeWidth={1.2} />
                  )}
                  <span className="visual-orbit" />
                </div>

                <div className="project-card-bottom">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type}</p>
                  </div>

                  {project.featured ? (
                    <button
                      className="view-project"
                      onClick={() => setActiveProject(project)}
                      aria-label="View SJC Care project details"
                    >
                      VIEW PROJECT <ArrowUpRight size={17} />
                    </button>
                  ) : (
                    <ExternalLinkOrText
                      href={project.repository}
                      className="view-project"
                      label="Open EcoSort repository"
                    >
                      VIEW REPOSITORY <ArrowUpRight size={17} />
                    </ExternalLinkOrText>
                  )}
                </div>

                {!project.featured && (
                  <div className="project-extra">
                    <p>{project.summary}</p>
                    <p className="project-note">{project.note}</p>
                    <div className="project-stack">
                      {project.stack.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.featured && (
                  <p className="featured-note">
                    <ShieldCheck size={14} />
                    Includes project overview, status, contributions, and report.
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            Project descriptions distinguish confirmed contributions
            from work that is still in progress. Repository access depends
            on project sharing permissions.
          </p>
        </section>

        <section
          className="contact section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-tag">
            <span>04</span> / CONTACT AND SOURCE CODE
          </div>

          <div className="contact-grid">
            <div>
              <p className="code-mark">&lt; say hello / &gt;</p>
              <h2 id="contact-title">
                Let's<br />connect<span className="period">.</span>
              </h2>
              <p className="contact-copy">
                For questions, collaboration, or project discussions,
                you can reach me through email or find my work on GitHub.
              </p>

              <div className="contact-links">
                {isPlaceholder(siteConfig.email) ? (
                  <span className="contact-link disabled-link">
                    <Mail size={17} /> Add your email in src/config.js
                  </span>
                ) : (
                  <a className="contact-link" href={emailHref}>
                    <Mail size={17} /> {siteConfig.email}
                    <ArrowUpRight size={15} />
                  </a>
                )}

                <ExternalLinkOrText
                  href={siteConfig.github}
                  className="contact-link"
                  label="GitHub profile"
                >
                  {githubUsername} <ArrowUpRight size={15} />
                </ExternalLinkOrText>
              </div>
            </div>

            <div className="repository-panel">
              <p className="repository-kicker">PROJECT LINKS</p>
              <h3>Explore the code<span>.</span></h3>
              <p>
                Review the implementation
                and project files where access is available.
              </p>

              <div className="repository-row">
                <div>
                  <strong>Portfolio repository</strong>
                  <small>This website's source code</small>
                  </div>
                  <ExternalLinkOrText
                  href={siteConfig.portfolioRepository}
                  className="repo-action"
                  label="Open portfolio repository"
                  >
                    <span>VIEW REPOSITORY</span>
                    <ArrowUpRight size={14} />
                    </ExternalLinkOrText>
                    </div>
                    <p className="repository-note">
                      Explore the source code of this portfolio through its GitHub repository.
                      </p>

            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <a className="wordmark" href="#home" aria-label="Back to top">
          <span className="brand-mark">A<span>.</span></span>
        </a>

        <p>MADE WITH CURIOSITY · © 2026 ALTHEA</p>

        <div className="footer-links">
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>
      </footer>
      
      {activeProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProject(null);
            }
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >

            <p className="code-mark">&lt; project report / &gt;</p>

            <div className="modal-meta">
              {activeProject.type} <span>·</span> {activeProject.year}
            </div>

            <div className="modal-title-row">
              <h2 id="modal-title">
                {activeProject.name}<span className="period">.</span>
              </h2>
              <span className="modal-status">{activeProject.status}</span>
            </div>

            <div className="case-study-section">
              <h3>Overview</h3>
              <p>{activeProject.overview}</p>
            </div>

            <div className="case-study-section">
              <h3>Status</h3>
              <p>
                <strong>{activeProject.status}.</strong> The project is
                undergoing revisions. The current Team Lead is handling
                the ongoing updates, incorporating feedback from the
                evaluation panel and beneficiary. Student confidentiality
                remains an important consideration. Final implementation,
                testing outcomes, and overall results have not yet been
                established.
              </p>
            </div>

            <div className="case-study-info">
              <div>
                <span>MY ROLE</span>
                <strong>{activeProject.role}</strong>
              </div>
              <div>
                <span>PROJECT BENEFICIARY</span>
                <strong>{activeProject.beneficiary}</strong>
              </div>
            </div>

            <div className="case-study-section">
              <h3>Report</h3>
              {activeProject.sections.map((section) => (
                <div className="report-section" key={section.heading}>
                  <h4>{section.heading}</h4>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div className="modal-repository">
              <div>
                <span>
                  <strong>Project repository</strong>
                  <small>Source code, where sharing is authorized</small>
                </span>
              </div>

              <ExternalLinkOrText
                href={activeProject.repository}
                className="text-link"
                label="Open SJC Care repository"
              >
                VIEW REPOSITORY <ArrowUpRight size={15} />
              </ExternalLinkOrText>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
