"use client";

import { useEffect, useState } from "react";

const IG =
  "https://www.instagram.com/beautyspace.by.iryna.lutsak/";

const PHONE = "+17175791751";

const ADDRESS =
  "25 S Broad St, Suite 102, Nazareth, PA 18064";

const MAP =
  "https://www.google.com/maps/search/?api=1&query=25+S+Broad+St+Suite+102+Nazareth+PA+18064";

const services = [
  {
    n: "01",
    title: "E-File Manicure",
    description:
      "European-inspired manicure care with a focus on precision and detailed nail preparation.",
  },
  {
    n: "02",
    title: "Waterless E-File Pedicure",
    description:
      "A detail-focused pedicure service using an E-file approach.",
  },
  {
    n: "03",
    title: "Gel Enhancements",
    description:
      "Explore gel enhancement options for your preferred nail finish.",
  },
  {
    n: "04",
    title: "Nail Strengthening",
    description:
      "Enquire about strengthening services and suitable nail-care options.",
  },
  {
    n: "05",
    title: "Nail Designs",
    description:
      "Individual nail designs with attention to the smaller details.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <main id="top">
      <header className="header">
        <a className="brand" href="#top" onClick={close}>
          BEAUTY SPACE
          <small>BY IRYNA LUTSAK</small>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Our Studio</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#visit">Visit Us</a>
        </nav>

        <a className="header-cta" href={`tel:${PHONE}`}>
          CONTACT STUDIO ↗
        </a>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <div
          className={`mobile-nav ${open ? "show" : ""}`}
          id="mobile-navigation"
          aria-hidden={!open}
        >
          <nav aria-label="Mobile navigation">
            <a href="#about" onClick={close}>Our Studio</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#work" onClick={close}>Our Work</a>
            <a href="#visit" onClick={close}>Visit Us</a>
          </nav>

          <a href={`tel:${PHONE}`} onClick={close}>
            CONTACT THE STUDIO ↗
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="micro">
            <span>NAZARETH, PENNSYLVANIA</span>
            <span>EUROPEAN-INSPIRED NAIL CARE</span>
          </div>

          <div className="hero-center">
            <span className="eyebrow">WELCOME TO BEAUTY SPACE</span>

            <h1>
              The art of
              <br />
              <em>beautiful</em>
              <br />
              details.
            </h1>

            <p>
              A nail studio in Nazareth, PA, exploring the beauty of
              precision, considered care and individual style.
            </p>

            <div className="actions">
              <a className="btn dark" href={`tel:${PHONE}`}>
                ENQUIRE ABOUT AN APPOINTMENT <span>↗</span>
              </a>

              <a className="text-link" href="#services">
                DISCOVER SERVICES ↓
              </a>
            </div>
          </div>

          <div className="hero-foot">
            <span>BEAUTY SPACE BY IRYNA LUTSAK</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <span className="frame-top">THE BEAUTY OF PRECISION</span>

            <div className="abstract-hand">
              <div className="shape shape-a" />
              <div className="shape shape-b" />
              <div className="shape shape-c" />
              <div className="shape shape-d" />
              <div className="shape shape-e" />
            </div>

            <div className="visual-word">
              <span>the</span>
              <strong>nail edit.</strong>
            </div>

            <span className="frame-bottom">
              CARE · DETAIL · ARTISTRY
            </span>
          </div>

          <span className="visual-stamp">BS / IL</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>
          BEAUTY IN THE DETAILS ✳ EUROPEAN NAIL CARE ✳
          BEAUTY IN THE DETAILS ✳ EUROPEAN NAIL CARE ✳
        </span>
      </div>

      <section className="about section-pad" id="about">
        <div className="section-label">
          <span>01 / OUR STUDIO</span>
          <span>AN INTRODUCTION</span>
        </div>

        <div className="about-grid">
          <div>
            <span className="eyebrow">BEAUTY SPACE</span>

            <h2>
              A space
              <br />
              for <em>you.</em>
            </h2>

            <div className="monogram">B<span>S</span></div>
          </div>

          <div className="about-copy">
            <p className="lead">
              Beautiful nails begin with attention to the details.
            </p>

            <p>
              Welcome to Beauty Space by Iryna Lutsak, a nail studio
              located in the heart of Nazareth, Pennsylvania.
            </p>

            <p>
              Discover European-inspired nail services, including
              E-file manicures, waterless pedicures, gel enhancements,
              nail strengthening and individual nail designs.
            </p>

            <p>
              Explore the services, discover Iryna&apos;s work and
              contact the studio directly for appointment enquiries.
            </p>

            <a
              className="underline-link"
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
            >
              FIND US ON INSTAGRAM ↗
            </a>
          </div>
        </div>
      </section>

      <section className="quote">
        <span className="eyebrow">THE BEAUTY SPACE PHILOSOPHY</span>

        <h2>
          It&apos;s all in
          <br />
          <em>the details.</em>
        </h2>

        <span className="quote-bottom">
          PRECISION / CARE / BEAUTY
        </span>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-label">
          <span>02 / EXPLORE</span>
          <span>THE SERVICE MENU</span>
        </div>

        <div className="section-heading">
          <div>
            <span className="eyebrow">THOUGHTFUL NAIL CARE</span>

            <h2>
              Our <em>services.</em>
            </h2>
          </div>

          <p>
            Discover the studio&apos;s nail-care offerings.
            Contact Beauty Space directly for current service
            details, pricing and availability.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <a
              href={`tel:${PHONE}`}
              className="service"
              key={service.n}
            >
              <span className="service-num">{service.n}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="circle-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="service-end">
          <span>INDIVIDUAL NAIL CARE</span>
          <span>CONTACT US TO ENQUIRE</span>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-label">
          <span>03 / THE WORK</span>
          <span>EXPLORE THE DETAILS</span>
        </div>

        <div className="work-heading">
          <span className="eyebrow">FOLLOW THE ARTISTRY</span>

          <h2>
            The beauty
            <br />
            <em>edit.</em>
          </h2>

          <p>
            Discover real nail designs, studio updates and more
            through Beauty Space&apos;s Instagram page.
          </p>
        </div>

        <div className="work-cards">
          <div className="work-card first">
            <span className="card-top">01 / THE MANICURE EDIT</span>

            <div className="card-art">
              <div className="art-arch" />
              <span>precision</span>
            </div>

            <span className="card-foot">
              DETAIL-FOCUSED NAIL CARE ✳
            </span>
          </div>

          <div className="work-card second">
            <span className="card-top">02 / THE DESIGN EDIT</span>

            <div className="card-art">
              <div className="art-arch" />
              <span>artistry</span>
            </div>

            <span className="card-foot">
              INDIVIDUAL NAIL DESIGNS ✳
            </span>
          </div>
        </div>

        <div className="work-end">
          <p>
            View the studio&apos;s actual portfolio on Instagram.
          </p>

          <a
            href={IG}
            className="btn dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE OUR INSTAGRAM <span>↗</span>
          </a>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-copy">
          <span className="eyebrow">04 / FIND YOUR BEAUTY SPACE</span>

          <h2>
            Come
            <br />
            <em>visit.</em>
          </h2>

          <p>
            Find Beauty Space by Iryna Lutsak in Nazareth,
            Pennsylvania.
          </p>

          <div className="address">
            <span>STUDIO ADDRESS</span>
            <strong>
              25 S Broad Street
              <br />
              Suite 102
              <br />
              Nazareth, PA 18064
            </strong>
          </div>

          <a
            href={MAP}
            className="underline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GET DIRECTIONS ↗
          </a>
        </div>

        <div className="visit-art">
          <div className="orbit one" />
          <div className="orbit two" />

          <div className="visit-art-inner">
            <span>FIND US IN</span>
            <strong>
              Naza
              <br />
              <em>reth.</em>
            </strong>
            <small>PENNSYLVANIA · 18064</small>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-label">
          <span>05 / CONNECT</span>
          <span>APPOINTMENT ENQUIRIES</span>
        </div>

        <div className="contact-grid">
          <div>
            <span className="eyebrow">WE&apos;D LOVE TO HEAR FROM YOU</span>

            <h2>
              Your next
              <br />
              <em>nail moment.</em>
            </h2>

            <p>
              Interested in a service or planning your next nail
              appointment? Contact the studio directly.
            </p>
          </div>

          <div className="contact-links">
            <a href={`tel:${PHONE}`}>
              <span>
                <small>01 / PHONE</small>
                Call the studio
                <em>(717) 579-1751</em>
              </span>
              <b>↗</b>
            </a>

            <a href={IG} target="_blank" rel="noopener noreferrer">
              <span>
                <small>02 / INSTAGRAM</small>
                Follow & connect
                <em>@beautyspace.by.iryna.lutsak</em>
              </span>
              <b>↗</b>
            </a>

            <a href={MAP} target="_blank" rel="noopener noreferrer">
              <span>
                <small>03 / LOCATION</small>
                Visit the studio
                <em>{ADDRESS}</em>
              </span>
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <span>NAIL CARE & BEAUTY</span>
          <span>NAZARETH, PA</span>
        </div>

        <div className="footer-name">
          BEAUTY <em>SPACE.</em>
        </div>

        <div className="footer-bottom">
          <span>BY IRYNA LUTSAK</span>

          <div>
            <a href={IG} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>
            <a href={`tel:${PHONE}`}>CALL ↗</a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}