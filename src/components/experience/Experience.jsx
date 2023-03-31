import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experiences_container">
        <h2>Experience</h2>
        <div className="articles">
        <article>
            <h5>Home Bargains</h5>
            <small>Currently working part-time at Home Bargains, I am improving on my communication and teamwork as the tasks require lots of interaction between myself and my colleagues, and with customers. I am also focused on upskilling and projects in my down-time.</small>
          </article>
          <article>
            <h5>Northcoders</h5>
            <small>13-week coding bootcamp to become junior full-stack developer. Some of the things I learned here are: JavaScript, Git Practices, AGILE methodology, OOP, PSQL, APIs, Testing, Backend, Frontend, Databases, Web development, Mobile development.</small>
          </article>
          <article>
            <h5>A R Services</h5>
            <small>Part-time at a garage. Handled customers over the phone and in person. Here I improved upon these skills: Communication, Customer Service, Time Management.</small>
          </article>
          <article>
            <h5>Hadson Ltd</h5>
            <small>Worked during Summers at a fabric shop. Engaged with customers and recorded short term finances. Skills: Communication, Customer Service, Excel, Multi-tasking</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience