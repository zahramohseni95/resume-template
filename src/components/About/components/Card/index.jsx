//components
import { Title } from "../../../Title";
//styles
import "./index.css";

export function Card() {
  return (
    <div className="col-md-6 mb-50">
      <Title title="01" classes="size-50 mb-50">
        Know <br />
        About me
      </Title>
      <div className="text-center mb-50 about-img">
        <img
          src={require("./assets/img/me.png")}
          width="250"
          alt=""
        />
      </div>
      <p>
        I'm a frontend developer who is interested in learning new things. I'm
        currently working as a freelancer and I have a serious passion for
        bringing a design to life 💙
      </p>
    </div>
  );
}
