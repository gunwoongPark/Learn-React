import "./App.css";
import logo from "./logo.svg";

function App() {
  let posts = { color: "blue", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts}>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
