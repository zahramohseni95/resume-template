//hooks
import { useState } from "react";
//components
import { Title } from "../Title";
import { Line } from "./components/Line";
//styles
import "./index.css";

export function Experience() {
  const [experiences, setExperiences] = useState([
    {
      id: "experiences004",
      date: "November 2022 - Present",
      jobTitle: "Freelancer",
      company: { site: "#", name: "Webmaster" },
      duties: "",
    },
    {
      id: "experiences003",
      date: "May 2022 - November 2022",
      jobTitle: "Wordpress Administrator",
      company: { site: "https://donyabattery.com/", name: "Battery World" },
      duties: "Management and control of the WordPress online store.",
    },
    {
      id: "experiences002",
      date: "November 2021 - April 2022",
      jobTitle: "Frontend Developer",
      company: { site: "#", name: "YaS PaY" },
      duties: "building the client-side of websites",
    },
    {
      id: "experiences001",
      date: "January 2020 - April 2021",
      jobTitle: "WordPress Data Entry",
      company: { site: "https://novinerooz.shop/", name: "Novinerooz" },
      duties:
        "assisting WordPress administration in editing, formatting, posting posts/pages/products and selling online",
    },
  ]);
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="col-md-12">
          <Title title="02" classes="size-50 mb-50">
            My <br />
            Experience
          </Title>
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            {experiences.map((experience) => {
              return (
                <Line
                  key={experience.id}
                  date={experience.date}
                  jobTitle={experience.jobTitle}
                  company={experience.company}
                  duties={experience.duties}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
