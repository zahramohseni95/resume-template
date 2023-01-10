// components
import { useState } from "react";
import { Title } from "../Title";
import { Categories } from "./components/Categories";
import { Portfolios } from "./components/Portfolios";
// styles
import "./index.css";

export function Projects() {
  const projects = [
    {
      category: "Reactjs",
      name: "Example1",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Bootstrap",
      name: "Example2",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Wordpress",
      name: "Example3",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Wordpress",
      name: "Example4",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Reactjs",
      name: "Example5",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Wordpress",
      name: "Example6",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Bootstrap",
      name: "Example7",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Reactjs",
      name: "Example8",
      imageSource: "../../../../assets/img/01.jpg",
    },
    {
      category: "Wordpress",
      name: "Example9",
      imageSource: "../../../../assets/img/01.jpg",
    },
  ];
  const [filterProject, setFilterProject] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All"); // for giving active class to category
  const categories = projects.map((project) => {
    return project.category;
  });

  function handleCategoryClick(event) {
    const filterCategory = event.target.value;
    setActiveCategory(filterCategory);

    if (filterCategory === "All") {
      const newFilteredProject = projects.slice();
      setFilterProject(newFilteredProject);
    } else {
      const newFilteredProject = projects.filter((project) => {
        return project.category === filterCategory;
      });
      setFilterProject(newFilteredProject);
    }
  }

  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="col-md-12">
          <Title title="03" classes="size-50">
            My <br />
            Projects
          </Title>
        </div>
        <div className="main-container portfolio-inner clearfix">
          <div className="portfolio-div">
            <div className="portfolio">
              <Categories
                activeCategory={activeCategory}
                categories={categories}
                onCategoryClick={(e) => {
                  handleCategoryClick(e);
                }}
              />
              <Portfolios projects={filterProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
