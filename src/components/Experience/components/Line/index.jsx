// styles
import "./index.css";

export function Line(props) {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon"></label>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">{props.date}</p>
        <h3>{props.jobTitle}</h3>
        <h4><a href={props.company.site} target='_blank' rel='noopener noreferrer'>{props.company.name}</a></h4>
        <p>{props.duties}</p>
      </div>
    </li>
  );
}
