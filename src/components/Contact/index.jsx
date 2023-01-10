//components
import { Title } from "../Title";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
//styles
import "./index.css";

export function Contact() {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="col-md-12">
          <Title title="04" classes="size-50 mb-50">
            Contact Me
          </Title>
        </div>

        <div className="col-md-4">
          <Info />
        </div>
        <div className="col-md-8">
          <Form />
        </div>
      </div>
    </div>
  );
}
