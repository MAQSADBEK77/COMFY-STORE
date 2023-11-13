const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
];
import { NavLink } from "react-router-dom";
function NavLinks() {
  return links.map((link) => {
    return (
      <li key={link.id}>
        <NavLink key={link.id} className="capitalize" to={link.url}>
          {link.text}
        </NavLink>
      </li>
    );
  });
}

export default NavLinks;
