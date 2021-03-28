import { useEffect } from "react";
import "./About.css";
export function About() {
  useEffect(() => {});
  return (
    <>
      <section id="about" className="section section__container">
        <AboutMe />
        <AboutMajors />
        <AboutJobs />
      </section>
    </>
  );
}

function AboutMajors() {
  return (
    <>
      {" "}
      <div className="about__majors">
        <div className="major">
          <div className="major__icon">
            <img className="major__icon major__icon--react"></img>
          </div>
          <h2 className="major__title">Front-end</h2>

          <p className="major__description">
            리액트 + Typescript를 활용하여 솔루션 UI를 개발하고 있습니다.
            <br />
            상태 관리 도구는 react-query와 apollo-client를 스터디 중입니다.
            <br />
            현재는 PoC 단계이기에 실제 개발에는 react-query를 사용 중이며,
            <br />
            정식 출시 후 서버 및 클라이언트를 graphQL 기반으로 변경할
            계획입니다.
          </p>
        </div>
        <div className="major">
          <div className="major__icon">
            <img className="major__icon major__icon--express"></img>
          </div>
          <h2 className="major__title">Back-end</h2>
          <p className="major__description">
            express.js + Typescript를 활용하여 솔루션 백엔드를 개발하고
            있습니다.
            <br />
            POC 프로젝트 특성 상 빠른 개발을 위한 스택을 사용합니다.
            <br />
            DBMS는 MongoDB를 사용 중입니다.
          </p>
        </div>
      </div>
    </>
  );
}

function AboutMe() {
  return (
    <>
      <h1 className="about__me--header">About me</h1>
      <p className="about__me--description">
        2019년 상반기 LG CNS에 입사하여, 솔루션 프로그래머로서 컨설팅, 기획,
        개발 업무를 수행하였습니다.
      </p>
      <p className="about__me--description">
        현재는 신규 출시 예정인 데이터 분석 솔루션의 R&D 업무를 수행 중입니다.
      </p>
    </>
  );
}

function AboutJobs() {
  return (
    <>
      <div className="about__jobs">
        <h1 className="about__jobs--header">About my jobs</h1>
        <div className="job">
          <img
            src="https://seekvectorlogo.net/wp-content/uploads/2019/04/lg-cns-vector-logo.png"
            alt="samsung"
            className="job__logo"
          />
          <div className="job__description">
            <p className="job__name">
              Currently working at LG CNS as Software Engineer
            </p>
            <p className="job__period">2019 july - Until now</p>
          </div>
        </div>
      </div>
    </>
  );
}
