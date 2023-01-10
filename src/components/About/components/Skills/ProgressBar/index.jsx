//styles
import "./index.css";

export function ProgressBar(props) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: props.width }}
        aria-valuenow={props.width}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="pull-left skill-title">{props.title}</div>
      </div>
      <div className="pull-right skill-percent">{props.width}</div>
    </div>
  );
}
