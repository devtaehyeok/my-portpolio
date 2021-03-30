import { useEffect } from "react";
import "./Projects.css";
export function Projects() {
  useEffect(() => {
    // Projects
    const workBtnContainer = document.querySelector(".work__categories");
    const projectContainer = document.querySelector(".work__projects");
    const projects = document.querySelectorAll(".project");
    workBtnContainer?.addEventListener("click", (e) => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      const filter =
        e?.target?.dataset?.filter ||
        (e?.target?.parentNode as HTMLElement)?.dataset?.filter;
      if (filter == null) {
        return;
      }

      // Remove selection from the previous item and select the new one
      const active = document.querySelector(".category__btn.selected");
      if (active != null) {
        active.classList.remove("selected");
      }
      e.target.classList.add("selected");

      projectContainer?.classList.add("anim-out");
      setTimeout(() => {
        projects.forEach((project) => {
          console.log((project as HTMLElement)?.dataset?.type);
          if (
            filter === "*" ||
            filter === (project as HTMLElement).dataset.type
          ) {
            project.classList.remove("invisible");
          } else {
            project.classList.add("invisible");
          }
        });
        projectContainer?.classList.remove("anim-out");
      }, 300);
    });
  }, []);
  return (
    <>
      <section id="projects" className="section">
        <div className="section__container">
          <h1>My projects</h1>
          <h3>1년 반 동안 경험한 다양한 프로젝트들...</h3>
          <div className="work__categories">
            <button className="category__btn selected" data-filter="*">
              All <span className="category__count">4</span>
            </button>
            <button className="category__btn" data-filter="Solution">
              Solution <span className="category__count">3</span>
            </button>
            <button className="category__btn" data-filter="System Management">
              System Management <span className="category__count">1</span>
            </button>
          </div>
          <div className="work__projects">
            <a
              href="https://www.lgcns.com/Solution/PerfecTwin"
              className="project"
              target="blank"
              data-type="Solution"
            >
              <img
                src="https://www.lgcns.com/static/images/solution/img_devon_perfectTwin_logo.png"
                alt="perfecTwin"
                className="project__img"
              />
              <div className="project__description">
                <h3>PerfecTwin</h3>
                <span>React, Typescript, mongoDB</span>
              </div>
            </a>
            <a
              href="https://www.cjfreshway.com/"
              className="project"
              data-type="Solution"
              target="blank"
            >
              <img
                className="project__img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fygC1Jjkrwaecg1G2Cdpqw2GR79fEFrfJQ&usqp=CAU"
                alt="CJ freshway"
              />
              <div className="project__description">
                <h3>CJ freshway nextGen</h3>
                <span>Solution Consulting</span>
              </div>
            </a>
            <a
              href="http://www.bok.or.kr/"
              className="project"
              data-type="Solution"
              target="blank"
            >
              <img
                className="project__img"
                src="https://pbs.twimg.com/profile_images/1088326629250613253/1ihLQf2F_400x400.jpg"
                alt="bank of korea"
              />
              <div className="project__description">
                <h3>Korean Bank nextGen</h3>
                <span>Solution tech support</span>
              </div>
            </a>
            <a
              href="https://kbinsure-online.co.kr/"
              className="project"
              data-type="System Management"
              target="blank"
            >
              <img
                className="project__img"
                src="http://www.kbinsure.co.kr/extrnl/image/common/kakao_ci_800.png"
                alt="kb direct"
              />
              <div className="project__description">
                <h3>KB insurance Direct Web page</h3>
                <span>Client Development with AngularJS</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
