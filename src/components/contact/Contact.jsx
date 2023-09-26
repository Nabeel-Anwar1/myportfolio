import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="sect">
          <h2>Contact</h2>
          <h4>Email me at: nabeel.anwar01@gmail.com</h4>
          <a href="mailto:nabeel.anwar01@gmail.com" className="btton">
            Click to Send an Email
          </a>
          <br />
          <h4>Give me a call at: 07897897683</h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
