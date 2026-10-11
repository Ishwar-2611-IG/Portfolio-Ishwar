import { Arrow, SectionLabel } from "../../components/ui";
import { contact, socials } from "../../data";
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

function SocialIcon({ name }: { name: "GitHub" | "LinkedIn" }) {
  const path = name === "GitHub"
    ? "M12 .297a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3Z"
    : "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";

  return (
    <svg className="contact-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={path} />
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
          <nav className="contact-socials" aria-label="Social profiles">
            {socials.map(({ label, href }) => {
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <SocialIcon name={label} />
                </a>
              );
            })}
          </nav>
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
