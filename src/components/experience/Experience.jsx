import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experiences_container">
        <div className="sect">
          <h2>Experience</h2>
          <div className="articles">
            <article>
              <h4>Home Bargains</h4>
              <p>
                Currently working part-time at Home Bargains, I am improving on
                my communication and teamwork as the tasks require lots of
                interaction between myself and my colleagues, and with
                customers. I am also focused on upskilling and projects in my
                down-time.
              </p>
            </article>
            <h4>AT Telecom Ltd</h4>
              <p>
              Worked as a front end developer as part of a small team and helped create and maintain key products for the company. 
              Primarily worked on website creation using React and testing using Cypress and manual testing. 
              Aided with code reviews and managing documentation.
              </p>
            </article>
            <article>
              <h4>Northcoders</h4>
              <p>
                13-week coding bootcamp to become junior full-stack developer.
                Some of the things I learned here are: JavaScript, Git
                Practices, AGILE methodology, OOP, PSQL, APIs, Testing, Backend,
                Frontend, Databases, Web development, Mobile development.
              </p>
            </article>
            <article>
              <h4>A R Services</h4>
              <p>
                Part-time at a garage. Handled customers over the phone and in
                person. Here I improved upon these skills: Communication,
                Customer Service, Time Management.
              </p>
            </article>
            <article>
              <h4>Hadson Ltd</h4>
              <p>
                Worked during Summers at a fabric shop. Engaged with customers
                and recorded short term finances. Skills: Communication,
                Customer Service, Excel, Multi-tasking
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
