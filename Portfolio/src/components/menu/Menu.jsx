import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return ( 
  <div className={"menu " + (menuOpen && "active")}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#works">Works</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="https://docs.google.com/document/d/1uuYogOQNyGI5x6hiTGNLEb-ogOugHzgbVuyaMfTB73U/edit?usp=sharing">Resume</a>
          </li>

      </ul>
  </div>
  )
}
