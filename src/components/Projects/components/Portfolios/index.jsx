// components
import {PortfolioItem} from "./components/PortfolioItem";

export function Portfolios(props) {
  const projects = props.projects;

  return (
    <div className="clearfix">
      {projects.map((project) => {
        return (
          <PortfolioItem
            key={project.name}
            category={project.category}
            name={project.name}
            imageSource={project.imageSource}
          />
        );
      })}
    </div>
  );
}
