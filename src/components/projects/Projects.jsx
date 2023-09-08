import "./projects.css"
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <section id="projects" className="sect">
      <div className="container projects__container">
        <h2>Projects</h2>
        <div className="projectcards">
        <article className="whynotcard">
              <h4>LearnCutchi (In Progress)</h4> <br/>
              <h5>A mobile app where you can learn the language Cutchi!</h5><br/>
              <small>Generations ago, my family migrated from India to different parts of East Africa. A language called Cutchi, which is a mix of Kutch and Swahili, was created and still used to this day. This app facilitates the learning of the Cutchi language making it accessible and enjoyable. My brother and I are developing this together using standard Git practices as we share a commitment to preserving cultural heritage through technology. </small>
                <Link to={"/LearnCutchi"}><pressable className="btton">More Info!</pressable></Link>
            </article>
        <article className="whynotcard">
              <h4>Snooker Scorer</h4> <br/>
              <h5>A mobile app where players can keep track of their scores while playing snooker</h5><br/>
              <small> A mobile app for snooker enthusiasts who want to keep track of their game scores in style! Say goodbye to tedious manual calculations and hello to a user-friendly digital scoring experience. I made this app because one of my friends is an avid snooker player and they were in need of a way to keep track of scores.</small>
                <Link to={"/SnookerScorer"}><pressable className="btton">More Info!</pressable></Link>
            </article>
            <article className="whynotcard">
              <h4>Why Not?</h4> <br/>
              <h5>Why Not? is an app where users can create, share and manage their own Bucket Lists.</h5><br/>
              <small>Why Not? is aimed at everyone who has goals they want to achieve before they kick the bucket.
The app allows users to build their own bucket list, when they complete an item from their bucket list it becomes a story which other users can then view to gain insight/inspiration. Through the app you can view top bucket list items based on rating, other users profiles, and search for events going on in your area.
Interaction with other users through messaging allows sharing of experiences and potential for people to accomplish bucket list goals together.
The idea behind the app came from wanting to have more of a 'Why Not?' attitude to be more spontaneous and push beyond your comfort zone to achieve big goals/lifelong ambitions.</small>
          <a href="https://northcoders.com/projects/nov-2022/why-not" target="_blank" rel="noopener noreferrer" className="btton">Demo and Description</a>
            </article>
            <article className="ncgamescard">
              <h4>NC Games</h4> <br/>
              <h5>The ultimate hub for reviewing board games!</h5> <br />
              <small>The ultimate destination for board game enthusiasts looking for reviews and recommendations. With a vast library of reviews written by experienced gamers. We have classic strategy games to the latest Kickstarter sensations. You can easily search for games by category, or sort by different attributes and read detailed reviews. Whether you're a casual player looking for a fun party game or a serious gamer searching for your next obsession, you can find it on Board To Death.
                <br/> GitHub pages:
                <br/> Backend - https://github.com/NabeelAnwar1/nc-games-project
                <br/> Frontend - https://github.com/Nabeel-Anwar1/fe-nc-games
              </small>
          <a href=" https://nabeel-games.netlify.app/" target="_blank" rel="noopener noreferrer" className="btton">Hosted website!</a>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Projects