import React, { useEffect } from "react";
import { BsFillCapslockFill } from "react-icons/bs";
import "./ArrowUp.css";

export function ArrowUp() {
  useEffect(() => {
    const home = document.querySelector(".home__container") as HTMLElement;
    const homeHeight = home.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      home.style.opacity = String(1 - window.scrollY / homeHeight);
    });
    // Show "arrow up" button when scrolling down
    const arrowUp: HTMLElement = document.querySelector(
      ".arrow-up"
    ) as HTMLElement;
    document.addEventListener("scroll", () => {
      if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
      } else {
        arrowUp.classList.remove("visible");
      }
    });

    // Handle click on the "arrow up" button
    arrowUp.addEventListener("click", () => {
      scrollIntoView("#home");
    });
  }, []);
  return (
    <>
      <button className="arrow-up">
        <BsFillCapslockFill />
      </button>
    </>
  );
}

function scrollIntoView(selector: string) {
  const scrollTo = document.querySelector(selector) as HTMLElement;
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
