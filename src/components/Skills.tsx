import { useEffect } from "react";
import "./Skills.css";
export function Skills() {
  useEffect(() => {});
  return (
    <>
      <section id="skills" className="section">
        <div className="section__container">
          <h1>Skills</h1>
          <p>
            금융 SM, 솔루션 개발, 다양한 고객 대상 솔루션 컨설팅 업무를
            수행하였습니다.
          </p>
          <p>
            현재는 신규 출시 예정인 솔루션의 R&D 업무를 수행 중이며,
            타입스크립트 기반 풀스택 개발을 즐기고 있습니다.
          </p>
          <p>항상 부족하지만 완벽을 추구하는 자세로 업무에 임합니다.</p>
          <div className="skillset">
            <div className="skillset__main">
              <h3 className="skillset__title">주 기술</h3>
              <div className="skill">
                <div className="skill__description">
                  <span>HTML / CSS</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>mongoDB</span>
                  <span>75%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>JavaScript</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>TypeScript</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>React</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>NodeJS</span>
                  <span>80%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__description">
                  <span>GraphQL</span>
                  <span>60%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
