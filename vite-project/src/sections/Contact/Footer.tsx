import { contact } from "../../data";

export function Footer() {
  return (
    <footer>
      <strong>IG</strong>
      <p>© {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
    </footer>
  );
}
