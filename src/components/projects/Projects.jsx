import "./projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects__container">
        <h2>Projects</h2>
        <div className="projectcards">
          <a href="https://northcoders.com/projects/nov-2022/why-not" target="_blank" rel="noopener noreferrer" className="whynotcard">
            <article>
              <h4>Why Not!</h4> <br/>
              <h5>Why Not? is an app where users can create, share and manage their own Bucket Lists.</h5><br/>
              <small>Why Not? is aimed at everyone who has goals they want to achieve before they kick the bucket.
The app allows users to build their own bucket list, when they complete an item from their bucket list it becomes a story which other users can then view to gain insight/inspiration. Through the app you can view top bucket list items based on rating, other users profiles, and search for events going on in your area.
Interaction with other users through messaging allows sharing of experiences and potential for people to accomplish bucket list goals together.
The idea behind the app came from wanting to have more of a 'Why Not?' attitude to be more spontaneous and push beyond your comfort zone to achieve big goals/lifelong ambitions.</small>
            </article>
          </a>
          <a href=" https://nabeel-games.netlify.app/" target="_blank" rel="noopener noreferrer" className="ncgamescard">
            <article>
              <h4>NC Games</h4> <br/>
              <h5>The ultimate hub for reviewing board games!</h5> <br />
              <small>The ultimate destination for board game enthusiasts looking for reviews and recommendations. With a vast library of reviews written by experienced gamers. We have classic strategy games to the latest Kickstarter sensations. You can easily search for games by category, or sort by different attributes and read detailed reviews. Whether you're a casual player looking for a fun party game or a serious gamer searching for your next obsession, you can find it on Board To Death.
                <br/> GitHub pages:
                <br/> Backend - https://github.com/NabeelAnwar1/nc-games-project
                <br/> Frontend - https://github.com/Nabeel-Anwar1/fe-nc-games
              </small>
            </article>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects