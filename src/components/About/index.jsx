//components
import { Card } from "./components/Card";
import { Skills } from "./components/Skills";
//syles
import "./index.css";

export function About() {
  return (
    <div className="section" id="about">
      <div className="container about-wrapper">
        <Card />
        <Skills />
      </div>
    </div>
  );
}
