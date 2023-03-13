import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="frame">
      <div class="card">
        <div class="flip hvr-outline-in">
          <div class="front">
            <h1>hey.</h1>
            <p class="flip-me">Flip Me</p>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <i class="fa fa-heart"></i>
          </div>

          <div class="back">
            <i class="fa fa-heart"></i>
            <h3>Krerkkiat</h3>
            <div class="line line-3"></div>
            <h2>Developer</h2>
            <div class="social">
              <i class="fab fa-codepen"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
