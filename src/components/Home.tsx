import React, { useEffect } from "react";
import "./Home.css";
import profile_img from "../imgs/profile.jpg";
function scrollIntoView(selector: string) {
  const scrollTo = document.querySelector(selector);
  scrollTo?.scrollIntoView({ behavior: "smooth" });
}

export function Home() {
  useEffect(() => {
    // Make navbar transparent when it is on the top
    const homeContactBtn = document.querySelector(".home__contact");
    homeContactBtn?.addEventListener("click", () => {
      scrollIntoView("#contact");
    });

    // Make home slowly fade to transparent as the window scrolls down
    const home = document.querySelector(".home__container") as HTMLElement;

    const homeHeight = home?.getBoundingClientRect().height;
    if (!home || !homeHeight) return;
    document.addEventListener("scroll", () => {
      home.style.opacity = String(1 - window.scrollY / homeHeight);
    });
  }, []);
  return (
    <>
      <section id="home">
        <div className="home__container">
          <img
            src={profile_img}
            alt="devtaehyeok's profile photo"
            className="home__avatar"
          />
          <h1 className="home__title">
            Hello, <br />
            I'm devtaehyeok
          </h1>
          <h2 className="home__description">
            An ambitious solution developer @
            <a
              className="home__description--lg-red"
              href="https://www.lgcns.co.kr/"
            >
              {" "}
              LG CNS
            </a>
            <h2 className="home__description">
              I am a dreamer who imagines changing the world with software.
            </h2>
          </h2>

          <button
            className="home__contact"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/taehyeok-lim-3950a9188/")
            }
          >
            Contact Me
          </button>
        </div>
      </section>
    </>
  );
}
