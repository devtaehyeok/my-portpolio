import { useEffect } from "react";
import logo from "../imgs/logo.png";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
function scrollIntoView(selector: string) {
  const scrollTo = document.querySelector(selector);
  scrollTo?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  useEffect(() => {
    // Make navbar transparent when it is on the top
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar?.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      console.log(navbarHeight);
      if (!navbarHeight) return;
      if (window.scrollY > navbarHeight) {
        if (!navbar) return;
        navbar?.classList.add("navbar--transparent");
      } else {
        navbar?.classList.remove("navbar--transparent");
      }

      // Handle scrolling when tapping on the navbar menu
      const navbarMenu = document.querySelector(".navbar__menu");
      navbarMenu?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }
        const link = target?.dataset.link || null;
        if (link == null) {
          return;
        }
        navbarMenu.classList.remove("open");
        scrollIntoView(link);
      });
      // Navbar toggle button for small screen
      const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
      navbarToggleBtn?.addEventListener("click", () => {
        navbarMenu?.classList.toggle("open");
      });
    });
  }, []);
  return (
    <>
      <nav id="navbar">
        <div className="navbar__logo">
          <img src={logo} className="navbar__logo-image"></img>
          <div className="navbar__logo-text">
            <a href="#">devtaehyeok</a>
          </div>
        </div>

        <ul className="navbar__menu">
          <li className="navbar__menu__item active" data-link="#home">
            Home
          </li>
          <li className="navbar__menu__item" data-link="#about">
            About
          </li>
          <li className="navbar__menu__item" data-link="#skills">
            Skills
          </li>
          <li className="navbar__menu__item" data-link="#projects">
            My projects
          </li>
          <li className="navbar__menu__item" data-link="#contact">
            Contact
          </li>
        </ul>
        {/* <!-- Toggle button --> */}
        <button className="navbar__toggle-btn">
          <BsList />
        </button>
      </nav>
    </>
  );
}
