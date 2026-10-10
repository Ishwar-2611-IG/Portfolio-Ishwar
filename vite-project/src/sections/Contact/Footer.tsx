import { contact, socials } from "../../data";

export function Footer() {
  return (
    <footer>
      <strong>IG</strong>
      <p>© {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
      <nav aria-label="Social links">
        {socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
