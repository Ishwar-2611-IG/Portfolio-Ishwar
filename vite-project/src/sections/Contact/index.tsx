import { Arrow, SectionLabel } from "../../components/ui";
import { contact } from "../../data";
import { ContactArt } from "./ContactArt";
import { Footer } from "./Footer";

type ContactIconName = "email" | "phone" | "location";

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, string> = {
    email: "M3 5h18v14H3z M3 7l9 6 9-6",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z",
    location: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0ZM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
  };

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-main">
        <div>
          <SectionLabel number="07">Contact</SectionLabel>
          <h2 id="contact-title">
            Let's build  <br />something <br /><em>useful together.</em>
          </h2>
        </div>

        <div className="contact-details">
          <p>Have a project in mind or just want to say hi? <br />I'd love to hear from you.</p>
          <a href={`mailto:${contact.email}`}>
            <ContactIcon name="email" />
            <span className="contact-text">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`}>
            <ContactIcon name="phone" />
            <span className="contact-text">{contact.phoneLabel}</span>
          </a>
          <span className="contact-location">
            <ContactIcon name="location" />
            <span>{contact.location}</span>
          </span>
          <a className="solid-cta" href={`mailto:${contact.email}`}>
            Send Message <Arrow />
          </a>
        </div>
      </div>

      <ContactArt />
      <Footer />
    </section>
  );
}
