//components
import { Title } from "../Title";
//styles
import "./index.css"

export function Header() {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="disply-table">
          <div className="table-cell" data-aos="fade-up" data-aos-delay="0">
            <Title title="Zahra Mohseni">
              Frontend
              <br />
              Developer
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
}
