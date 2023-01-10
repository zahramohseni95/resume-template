// styles
import "./index.css";

export function Categories(props) {
  const categories = [...new Set(props.categories)];
  const activeClass = props.activeCategory === "All" ? "active" : "";
  return (
    <div className="categories-grid">
      <nav className="categories">
        <ul className="portfolio_filter">
          <li>
            <button
              value="All"
              className={`btn btn-link ${activeClass}`}
              onClick={props.onCategoryClick}
            >
              All
            </button>
          </li>
          {categories.map((category) => {
            const activeClass =
              props.activeCategory === category ? "active" : "";
            return (
              <li key={category}>
                <button
                  className={`btn btn-link ${activeClass}`}
                  value={category}
                  onClick={props.onCategoryClick}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
