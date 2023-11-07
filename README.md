# react를 이용한 포트폴리오 사이트 만들기
React는 사용자 인터페이스(UI)를 개발하기 위한 JavaScript 라이브러리이며, 특히 웹 애플리케이션의 프론트엔드 부분을 만들 때 매우 인기 있는 도구 중 하나입니다. Facebook에서 개발한 React는 재사용 가능한 UI 컴포넌트를 만들고 관리하는 데 도움을 주며, 애플리케이션의 상태를 효율적으로 관리하는데 도움이 됩니다. React는 가상 DOM(Virtual DOM) 개념을 사용하여 성능을 최적화하고 UI 업데이트를 효과적으로 처리합니다.
   
1. 컴포넌트: React 애플리케이션은 컴포넌트로 구성됩니다. 컴포넌트는 UI의 일부를 나타내며 재사용 가능하며 독립적으로 관리됩니다. 예를 들어, 버튼, 헤더, 사이드바 등이 모두 개별적인 컴포넌트로 만들어질 수 있습니다.

2. JSX(JavaScript XML): React에서 UI를 정의할 때 JSX라고 불리는 문법을 사용합니다. JSX는 JavaScript 확장으로 HTML과 비슷하게 생겼지만 JavaScript 코드 안에서 사용됩니다. JSX를 사용하여 컴포넌트의 구조와 모양을 정의하고, 데이터와 상태를 동적으로 렌더링할 수 있습니다.

3. 가상 DOM(Virtual DOM): React는 가상 DOM을 사용하여 UI 업데이트 성능을 최적화합니다. 변경된 부분만 실제 DOM에 적용하는 대신, 가상 DOM을 통해 변경 내용을 비교하고 최소한의 DOM 조작으로 업데이트를 수행합니다. 이로써 애플리케이션의 렌더링 속도와 효율성이 향상됩니다.

4. 단방향 데이터 흐름: React는 단방향 데이터 흐름을 지향합니다. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하고 상태를 업데이트하는 방식으로 데이터 관리를 쉽게 만듭니다. 이것은 애플리케이션의 상태를 예측 가능하게 만들어 유지보수를 용이하게 합니다.

5. 컴포넌트 생명주기: React 컴포넌트는 여러 생명주기 메서드를 가지며, 컴포넌트가 생성되고 업데이트되고 파괴되는 과정을 제어할 수 있습니다. 이를 활용하여 컴포넌트의 동작을 조절하고 필요한 작업을 수행할 수 있습니다.
   
React는 상당히 큰 커뮤니티와 생태계를 가지고 있으며, 추가로 라우팅, 상태 관리, 서버 사이드 렌더링 등을 지원하는 다양한 라이브러리와 프레임워크와 통합할 수 있습니다. React는 모바일 앱 개발을 위한 React Native와 데스크톱 앱 개발을 위한 Electron과도 통합될 수 있어 다양한 플랫폼에서 사용됩니다.

## 작업 순서
1. 폴더를 만들고 리액트를 설치 `npx create-react-app 프로젝트 이름`
2. git에 업로드
3. [lenis 사이트] (https://lenis.studiofreight.com/)

## 설치
1. react 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`


## 트러블 슈팅
<details>
    <summary>
        Whitespace 에러
    </summary>
    유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데 Git이 이 둘 중 어느 쪽을 선택할지 혼란이 왔다.

    해결 
    `git config --global core.autocrlf true // 시스템 전체에 적용` 
    `git config core.autocrlf true // 해당 프로젝트에만 적용`
</details>

### GSAP
GSAP( GreenSock Animation Platform)은 웹 애니메이션을 개발하는 데 사용되는 강력하고 유연한 JavaScript 라이브러리입니다. GSAP은 웹 개발자들이 웹사이트 또는 웹 애플리케이션에서 복잡한 애니메이션 및 상호작용 요소를 구현하고 제어하기 위한 다양한 도구와 기능을 제공합니다.
    
GSAP은 웹 애니메이션의 높은 품질과 성능을 제공하기 위한 강력한 도구로 많은 웹 개발자와 디자이너에게 사랑받고 있으며, 웹사이트의 시각적 요소를 향상시키고 사용자 경험을 개선하는 데 사용됩니다.

### lenis
lenis.js는 JavaScript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있도록 도와줍니다.