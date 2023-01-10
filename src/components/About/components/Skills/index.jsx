//hooks
import { useState } from "react";
//components
import { ProgressBar } from "./ProgressBar";

export function Skills() {
  const skillsArray = [
    { width: "90%", title: "html" },
    { width: "85%", title: "css" },
    { width: "85%", title: "bootstrap" },
    { width: "80%", title: "scss" },
    { width: "60%", title: "javascript" },
    { width: "25%", title: "reactjs" },
    { width: "90%", title: "wordpress" },
    { width: "50%", title: "photoshop" },
    { width: "50%", title: "figma" },
    { width: "75%", title: "git" },
    { width: "90%", title: "trello" },
  ];
  const [skills, setSkills] = useState(skillsArray);
  return (
    <div className="col-md-6">
      {skills.map((skill) => {
        return <ProgressBar key={skill.title} width={skill.width} title={skill.title} />;
      })}

      {/* add later: cPanel/DirectAdmin, ant design, Material UI */}
    </div>
  );
}
