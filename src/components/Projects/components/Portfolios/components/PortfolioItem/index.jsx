// styles
import "./index.css";

export function PortfolioItem(props) {
  return (
    <div className="col-md-4 col-sm-6">
      <a href="" className="portfolio_item">
        <img src={require("../../../../assets/img/01.jpg")} alt="image" className="img-responsive" />
        <div className="portfolio_item_hover">
          <div className="portfolio-border clearfix">
            <div className="item_info">
              <span>{props.name}</span>
              <em>{props.category}</em>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
