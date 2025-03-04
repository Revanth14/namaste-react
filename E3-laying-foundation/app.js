import React from "react";
import ReactDOM from "react-dom/client";

// React elements
// React.createElement => ReactElement-JS object =>(when rendered) HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);

console.log(heading);

// JSX (transpiled before it reached JS Engine)

// JSX =>(using Babel) React.createElement => ReactElement-JS object =>(when rendered) HTMLElement (render)
const JsxHeading = () => <h1>Hello from JSX</h1>;

const jsxHeading2 = (
  <h1 className="heading2">Heading 2 using JSX and className</h1>
);

console.log(JsxHeading);

// React Components
// 1. Class based components - old way
// 2. Functional Components - new way

// React Functional component (1 way)

const TitleComponent = () => <h1>Title card component</h1>;

const HeaderComponent = () => {
  return (
    <div id="container">
      <JsxHeading />
      <TitleComponent />
      <h1>Hello World from Functional component</h1>
    </div>
  );
};
// (another way)
const HeaderNew = () => (
  <h1 className="header2">Hello from new header component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
