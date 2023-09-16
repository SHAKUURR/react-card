import "./styles.css";
import { useState } from "react";
const messages = [
  "A romance as complicated as CSS! 💔😅",
  "It's like Shakespeare trying JavaScript! 📜💻😅",
  `From "Hello, World" to "Hello, Confusion!" 🌍❓😅`
];
export default function App() {
  return (
    <div className="box">
      <div className="heading">
        <h1>Shakur + React</h1>
        <p>A love-hate relationship! 😅</p>
      </div>
      <div className="container">
        <Details />
      </div>
    </div>
  );
}

function Details() {
  const [step, setStep] = useState(1);
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrev() {
    if (step <= 1) return;
    setStep(step - 1);
  }

  return (
    <>
      <div className="numbs">
        <h2 className={`numbs-head ${step >= 1 ? "active" : ""}`}>1</h2>
        <h2 className={`numbs-head ${step >= 2 ? "active" : ""}`}>2</h2>
        <h2 className={`numbs-head ${step >= 3 ? "active" : ""}`}>3</h2>
      </div>
      <div className="text">
        <p>
          Step {step}: {messages[step - 1]}
        </p>
      </div>
      <div className="button">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
