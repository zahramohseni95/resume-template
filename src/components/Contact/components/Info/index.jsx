// Styles
import "./index.css";

export function Info() {
  return (
    <>
      <h3>Mobile Number</h3>
      <a href="tell:+989191070542">+98 919 107 0542</a>
      <h3>Email</h3>
      <a href="mailto:zmohseni95@gmail.com">zmohseni95@gmail.com</a>

      <h3>Social Network</h3>

      <ul className="social">
        <li>
          <a href="https://github.com/zahramohseni95">
            <i className="ion-social-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zahramohseni95/">
            <i className="ion-social-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="clearfix"></div>
      <div className="h-50"></div>
    </>
  );
}
