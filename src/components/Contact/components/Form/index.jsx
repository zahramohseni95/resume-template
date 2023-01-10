// Styles
import "./index.css";

export function Form() {
  return (
    <form
      className="contact-bg"
      id="contact-form"
      name="contact"
      method="post"
      noValidate="novalidate"
    >
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Your E-mail"
      />
      <input
        type="text"
        name="phone"
        className="form-control"
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        className="form-control"
        placeholder="Your Message"
        style={{ height: "120px" }}
      ></textarea>
      <button
        id="submit"
        type="submit"
        name="submit"
        className="btn btn-glance"
      >
        Send
      </button>
    </form>
  );
}
