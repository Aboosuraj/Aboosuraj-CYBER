"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Globe,
  Mail,
  Menu,
  Send,
  ShieldCheck,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "IOPn DEX",
    category: "DECENTRALIZED FINANCE",
    description:
      "A decentralized exchange in the IOPn ecosystem, built around token swaps, wallet connectivity, and a streamlined trading experience.",
    tags: ["Next.js", "Wagmi", "Viem", "DeFi"],
    icon: <Wallet size={25} />,
    url: "https://iopndex.xyz/",
  },
  {
    number: "02",
    name: "DREEM SI",
    category: "WEB3 SECURITY",
    description:
      "A token security scanner designed to help users investigate smart contracts, identify potential risks, and make more informed decisions.",
    tags: ["Next.js", "Web3", "Security"],
    icon: <ShieldCheck size={25} />,
    url: "https://github.com/aboosuraj",
  },
  {
    number: "03",
    name: "IOPn Pay",
    category: "CRYPTO PAYMENTS",
    description:
      "A crypto payment application exploring wallet transfers, QR payments, and transaction tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: <Zap size={25} />,
    url: "https://github.com/aboosuraj",
  },
  {
    number: "04",
    name: "IOPn.fun",
    category: "TOKEN LAUNCHPAD",
    description:
      "A token launchpad project focused on making token creation and participation in the IOPn ecosystem more accessible.",
    tags: ["Web3", "Tokens", "DeFi"],
    icon: <Blocks size={25} />,
    url: "https://github.com/aboosuraj",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Solidity",
  "Wagmi",
  "Viem",
  "RainbowKit",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setStatus("Message sent successfully! Thank you for reaching out.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#home" className="brand" aria-label="CYBER Aboosuraj home">
          <span className="brand-mark">C.</span>
          <span className="brand-name">
            CYBER <span className="brand-symbol">🐂🀄️</span>
            <span className="brand-divider">|</span>
            <span className="accent">Aboosuraj</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            WEB3 BUILDER · OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">WELCOME TO MY DIGITAL WORLD</p>

          <h1>
            Aboo
            <span className="gradient-text">suraj.</span>
          </h1>

          <div className="cyber-name">CYBER 🐂🀄️</div>

          <h2>
            Building the future
            <br />
            <span className="muted">one block at a time.</span>
          </h2>

          <p className="hero-description">
            Web3 developer and blockchain builder creating decentralized
            applications, DeFi experiences, and tools for the next generation
            of the internet.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me <Mail size={17} />
            </a>
          </div>

          <div className="social-row">
            <a
              href="https://github.com/aboosuraj"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg> GitHub
            </a>
            <a
              href="https://x.com/aboosvraj"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.44L5.54 22H2.4l7.25-8.29L1.8 2h6.4l4.43 6.78L18.9 2Zm-1.1 18h1.73L7.28 3.89H5.42L17.8 20Z"/></svg> X / Twitter
            </a>
            <a
              href="https://t.me/aboosuraj"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={17} /> Telegram
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-top">
              <span className="tiny-label">CYBER_PROFILE_001</span>
              <span className="live-indicator">● BUILDER</span>
            </div>

            <div className="avatar">
              <Image
                src="/dp.jpg"
                alt="Aboosuraj CYBER profile picture"
                fill
                priority
                sizes="(max-width: 650px) 190px, 220px"
                className="avatar-image"
              />
              <span className="avatar-fallback">A</span>
              <div className="avatar-star star-one">✳</div>
              <div className="avatar-star star-two">✦</div>
            </div>

            <h3>Aboosuraj</h3>
            <p className="profile-cyber">CYBER 🐂🀄️</p>
            <p className="profile-role">Web3 Developer &amp; Builder</p>

            <div className="profile-divider" />

            <div className="profile-detail">
              <span>FOCUS</span>
              <strong>Blockchain · DeFi · DApps</strong>
            </div>

            <div className="profile-detail">
              <span>PHILOSOPHY</span>
              <strong>Build. Test. Improve.</strong>
            </div>

            <div className="profile-bottom">
              <Code2 size={16} /> BUILDING ONCHAIN
              <span className="profile-version">v2.0</span>
            </div>
          </div>

          <div className="floating-badge badge-top">
            <span className="badge-icon">
              <Code2 size={17} />
            </span>
            <span>
              <strong>Build</strong>
              <small>Real products</small>
            </span>
          </div>

          <div className="floating-badge badge-bottom">
            <span className="badge-icon cyan">
              <Globe size={17} />
            </span>
            <span>
              <strong>Web3 native</strong>
              <small>Decentralized future</small>
            </span>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="about section-wrap section-block" id="about">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="section-number">01</span> ABOUT ME
          </span>
          <h2>
            Curiosity into code.
            <br />
            <span className="muted">Ideas into products.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m <strong>Aboosuraj</strong>, also known as{" "}
              <strong>CYBER 🐂🀄️</strong>, a developer passionate about
              building useful products in the blockchain ecosystem.
            </p>

            <p>
              I enjoy turning ideas into working applications and exploring
              how decentralized technology can improve digital experiences.
              My projects focus on practical development, experimentation,
              and continuous improvement.
            </p>

            <a className="text-link" href="#contact">
              Have a project in mind? Let&apos;s talk{" "}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="principles">
            <div className="principle">
              <span className="principle-icon purple">
                <Code2 />
              </span>
              <div>
                <h3>Build with purpose</h3>
                <p>Useful applications over empty hype.</p>
              </div>
            </div>

            <div className="principle">
              <span className="principle-icon blue">
                <Blocks />
              </span>
              <div>
                <h3>Think decentralized</h3>
                <p>Exploring open, user-focused technology.</p>
              </div>
            </div>

            <div className="principle">
              <span className="principle-icon pink">
                <Zap />
              </span>
              <div>
                <h3>Keep improving</h3>
                <p>Test, learn, refine, and ship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-wrap section-block" id="projects">
        <div className="section-heading heading-row">
          <div>
            <span className="eyebrow">
              <span className="section-number">02</span> SELECTED WORK
            </span>
            <h2>
              Things I&apos;m <span className="gradient-text">building.</span>
            </h2>
          </div>

          <a
            className="text-link"
            href="https://github.com/aboosuraj"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  {project.number} / PROJECT
                </span>
                <span className="project-icon">{project.icon}</span>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore project <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-wrap section-block" id="skills">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="section-number">03</span> MY TOOLKIT
          </span>
          <h2>
            Tools for turning
            <br />
            <span className="muted">ideas into reality.</span>
          </h2>
        </div>

        <div className="skills-panel">
          <p className="skills-intro">
            Technologies I use or explore while building Web3 applications.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-chip" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>

          <p className="skills-note">
            Always learning. Always building. Always moving forward.
          </p>
        </div>
      </section>

      <section className="contact section-wrap section-block" id="contact">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">
              <span className="section-number">04</span> GET IN TOUCH
            </span>

            <h2>
              Let&apos;s build
              <br />
              something <span className="gradient-text">great.</span>
            </h2>

            <p>
              Have a Web3 idea, collaboration, or opportunity? Send me a
              message. I&apos;d love to hear what you&apos;re building.
            </p>

            <a className="contact-email" href="mailto:aboosuraj@gmail.com">
              <span className="email-icon">
                <Mail size={20} />
              </span>
              <span>
                <small>EMAIL ME DIRECTLY</small>
                <strong>aboosuraj@gmail.com</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/aboosuraj"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg> GitHub
              </a>
              <a
                href="https://x.com/aboosvraj"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.44L5.54 22H2.4l7.25-8.29L1.8 2h6.4l4.43 6.78L18.9 2Zm-1.1 18h1.73L7.28 3.89H5.42L17.8 20Z"/></svg> X / Twitter
              </a>
              <a
                href="https://t.me/aboosuraj"
                target="_blank"
                rel="noreferrer"
              >
                <Send size={17} /> Telegram
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <div>
                <span className="form-overline">YOUR MESSAGE</span>
                <h3>Tell me about it.</h3>
              </div>
              <span className="form-spark">✳</span>
            </div>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              placeholder="What should I call you?"
              required
              maxLength={100}
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              maxLength={200}
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              placeholder="Project, collaboration, opportunity..."
              required
              maxLength={150}
            />

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me what you have in mind..."
              required
              maxLength={5000}
            />

            <button
              type="submit"
              className="button button-primary submit-button"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send a message"}
              <Send size={16} />
            </button>

            <p
              className="form-note"
              role="status"
              aria-live="polite"
            >
              {status ||
                "Your message will be submitted securely through the contact service once configured."}
            </p>
          </form>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">C.</span>
          <span className="brand-name">
            CYBER 🐂🀄️ <span className="brand-divider">|</span>{" "}
            <span className="accent">Aboosuraj</span>
          </span>
        </a>

        <p>Designed with purpose. Built for the decentralized future.</p>

        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} Aboosuraj
        </span>
      </footer>
    </main>
  );
}
