# 포트폴리오 with CRA + typescript

지금까지의 이력을 정리하기 위한 페이지입니다.

## 제작을 위해 공부한 내용

> 개인적 공부를 위해 정리한 내용이라 지금은 매우 난잡함

- 도메인 구입(todo) : 구글 도메인

- 웹 페이지 퍼블리싱 시 고민할 사항

  - Planning, Design
  - Git / github
  - HTML
    - 일반적인 텍스트와 문법적으로 구분하기 위해 annotitated된 브라우저에서 보여주기 위한 파일
    - HEAD
    - BODY
  - CSS
    - STYLING
  - Javascript
  - Publish

- 반응형 웹

  - 미디어쿼리 - 모바일 퍼스트

  - ![What are media queries and how do they work? - Seobility Wiki](https://www.seobility.net/en/wiki/images/6/6f/Media-Queries.png)

    - min-width :적어도..... 이 크기 이상이면
    - screen은 종류
      - 연산자.. and not only comma

    ```css
    @media screen and (min-width: 800px){
        .container{
         width: 50%   
        }
    }
    ```

    

- html 구조화

  - 헤드는 메타 정보
    - utf-8 현존 모든 문자 포맷 지원
  - 바디는 실제 정보

![HTML5 nav 태그 ,nav요소 메뉴 네비게이션 : 네이버 블로그](https://lh3.googleusercontent.com/proxy/W4Q8B7PrfT65yLBIzPLHQVVEQAH_jdNNI0lBJy3uN7m3h9N1snlxp30I5_uer4M5-bKykIheKygzHigYGEBuoN7UDHJlRcKcc0BaeZtTA4lb8x5w0RfCDe2sF2xYCc49ZHnvTHH5hMGzKLGrZOpLLx4F3VkpPlsRWQ)

- 메인
  - 문서 내 단 하나만 존재 가능 (role="main")
  - 섹션
    - **`<section>` 요소**는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 
    -  요소의 콘텐츠를 외부와 구분하여 단독으로 묶는 것이 나아보인다면 [`아티클`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article) 요소가 더 좋은 선택일 수 있습니다.
      - 뉴스와 광고 영역 등
    - 아티클 : 재사용 가능한 요소(콘텐츠)
      - 포럼 게시물, 잡지 또는 신문 기사, 블로그 항목, 제품 카드, 사용자가 제출 한 댓글, 대화 형 위젯 또는 가젯 또는 기타 독립적 인 콘텐츠 항목.
    - 아티클 안에 아티클 : 안쪽 내용이 관련 있는 내용임

- aside
  - 배너, 용어설명, 관련 상품 등 직접 관련성 떨어지는 내용
- 박스와 아이템
  - 박스 : 섹셔닝이 되며 사용자에게 보여지지 않음 (form, section, span, div, main, span 등)
    - h$는 엄밀하게 박스가 아님
  - 아이템 : 사용자에게 보여짐
    - label, a, video, button, audio, map, input, lavel, canvas, img, table
    - input : 고유한 아이디를 주면 좋음
- 블록 & 인라인
  - 블록
    - 한 줄에 하나. 오른쪽 브라우저 자동마진
    - div
  - 인라인
    - 공간이 허용하면 옆에 배치
    - 인라인은 크기가 컴포
    - span
  - 인라인은 컨텐츠 (안 물건)에 맞춰서 처리함
    - width, height 속성 안먹음
  - 인라인 블록은 상자를 물건처럼 처리하자
  - 블록은 한줄에 하나 상자
- 태그
  - 태크는 Openning tag, closing tag + content
  - 태그는 html 엘리먼트, 노드
- 애트리뷰트
  - 태그에 추가되는 정보
- inline-block
  - 블럭 옆 자동 마진 X


## 내용 구성시 고려 내용

- 싱글 페이지
- 클릭을 작게 할 수 있게
  - 최소한의 클릭
- 깔끔하지만 나의 개성을 살려서
- 전문가, 전문 지식, 개발 관련
- 개발에 개한 나의 열정
- 나의 기술 스택
  - 언어
    - Javascript
    - Python
  - 툴
  - 기타 (수학, 물리)
- 내가 가지고 있는 언어 기술 툴
- 프로젝트들 (카테고리, 우선순위)
- 추천서
  - 1.
    - 강점, 스킬
    - 누가 (링크드인, 깃허브
  - 2.
    - 연락처
    - Linkedin
    - github

### 콘텐츠

- 소개
  - 학력
  - 경력
- 주요 스택
  - 프론트엔드
  - 백엔드
  - 모바일
- 경력
  - 회사, 기간
  - 학교, 학원
- 프로젝트들
  - 프로젝트 우선순위
    - 뭔지? 주요 기능은 무엇인지?
    - 깃허브
- 와이어프레이밍
  - 스트럭처
    - 인포메이션, 네비게이션
  - 레이아웃
    - 페이지 계층
    - 엘리멘트 위치
  - 컨텐츠
    - 어떻게 내용이 들어갈 것인가
  - 기능
  - 명심할 사항
    - Keep them simple
    - Use a grid
    - Short Sharp Annotation
- Canva.com
  - 나만의 로고 만들기!
- jsbin.com

#### CSS

-  캐스캐이딩 
  - 상속이 아님
    - 텍스트 관련 속성 + 몇개만 상속됨
  - 인라인 스타일 > 사용자 스타일시트 > 브라우저 시트 (우선순위)
- a[href^="naver"] // a[href$="naver"] 

- 기본 box-sizing은 content-box

  - 추가시 content에 더해짐
  - border-box로 바꿔 씀

- 앱솔루트/ 스태틱 / 렐러티브

  - relative
    - 원래 자리 유지하며 그 위치에서 상대적으로 움직임
  - static 
    - 디폴트
  - absolute
    - 위로 올라가며 첫번째 relative 요소 기준으로 움직임
    - 원래 위치에서 빠져나옴
    - 위에 relative 없으면 body 기준

- sticky vs fixed

  - sticky는 부모 요소 기준
    -  top left 지정해주면 부모 기준 위치 고정
  - fixed
    - 뷰포트 위치 기준 고정
    - 기존 문서에서 벗어나 위치 지정됨

- centering-trick

  - div는 한줄씩 차지해야 하기 때문에 브라우저가 자동으로 마진을 오른쪽으로 넣어줌	

  - 마진 오토를 하면 따라서 수평 가운데 정렬이 됨
    - 자동으로 넣어주는건 수평만이기 때문에 수직은 안됨
  - text-align
    - 다른 요소들도 수평 정렬 가능
    - div는 마진있어서 안됨
    - span,button 같은 블럭 레벨 아닌 것들은 수평 정렬 가능
  - transform: translate(50%,50%)
  - 텍스트 중간 정렬은 수직은 line-height:을 부모 높이만큼 줌
    - 정상적인 방법은 아니지만 흔하게 쓴다.

- 반응형 배경 이미지
  - background-image : url('/...')
  - background-repeat: no-repeat;
  - background-position:center;
  - background-size:cover;
  - background : center/cover no-repeat url('/...')
- Trasformation
  - x와  y축 이동
  - transform: translateX(100px);
  - transform: translateY(100px);
  - transform: translate(-50px,-20px);
  - transform: scale(1.2)
  - transform: rotate(45deg)
  - transform: translate(-50px,-20px) scale(1.2) rotate(45deg)
- transition
  -  transition : all 2s ease
  -  transition : background-color 200ms ease-in

- Position : 디폴트 밸류 스태틱
  - left
  - top
  - bottom 
  - right
    - 렐러티브 : 원래 위치 유지하며 원래 위치 기준으로 이동
    - 엡솔루트 : 원래 위치 무시하며 위의 렐러티브 기준 이동
      - 위에 렐러티브 없으면 body 태그 기준
    - fixed : 상자에서 벗어나 뷰포트 기준
    - sticky : 상자 안에서 원래 있던 자리 유지
  - PostCSS가 구버전 지원 추가해준다

- emmet
  - div.container>div.item.item${$}

마테리얼UI 컬러툴 사용하기

- 브라우저는 디브 오른쪽 자동으로 마진 넣어줌!
- flex-wrap: nowrap
- flex-flow : column nowrap
- space-evenly 
- between
- around
- align-items  : 한줄 세로
- align-content : 여러줄 끼리의 간격
- justify-content : 한줄 가로

아이템 : 오더가 빠를수록 오더 속성 앞으로. 거의 안씀

- flex-basis : 항상 비율 유지
- align-self : 하나만 한 줄에서 세로로

