import "./navbar.css"
import data from "./data"

const Nav = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">Nabeel Anwar</a>
        <ul className="nav__menu">
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <div></div>
      </div>
    </nav>
  )
}

export default Nav