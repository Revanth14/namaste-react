// const heading = React.createElement(
//   "h1",
//   { id: "heading1" },
//   "Hello World from React!"
// );

// console.log(heading);
// const heading3 = React.createElement("h3", {}, "This is a Heading3");

// How to create nested elements
/*
<div id="parent">
    <div id="child">
        <h1>I am an H1 tag</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
