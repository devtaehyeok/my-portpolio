import React, { useEffect } from "react";
import { AiFillGithub, AiFillHome, AiFillLinkedin } from "react-icons/ai";
import "./Contact.css";
function scrollIntoView(selector: string) {
  const scrollTo = document.querySelector(selector);
  scrollTo?.scrollIntoView({ behavior: "smooth" });
}

export function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <h1 className="contact__title">
          개발에 대한 열정을 공유하고 싶습니다.
        </h1>
        <h2 className="contact__email">ith13579@korea.ac.kr</h2>
        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/taehyeok-lim-3950a9188/"
            target="_blank"
            title="링크드인 주소입니다."
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/devtaehyeok"
            target="_blank"
            title="제 깃헙 주소입니다."
          >
            <AiFillGithub />
          </a>
          <a
            href="https://itchallenger.tistory.com/"
            target="_blank"
            title="티스토리 블로그입니다."
          >
            <AiFillHome />
          </a>
        </div>
        <p className="contact__rights">
          2021 devtaehyeok - All rights reserved
        </p>
      </section>
    </>
  );
}
