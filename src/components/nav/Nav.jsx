import './Nav.css'

import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import instagram from '../../assets/icons/instagram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="sr-only">Magnólia Papelaria</h1>
      </div>

      <div className="links-wrapper">
        <ul className="links">
          <li>
            <a href="/#" className="link">Início</a>
          </li>
          <li>
            <a href="/#" className="link">Franquia</a>
          </li>
          <li>
            <a href="/#" className="link">Comprar</a>
          </li>
          <li>
            <a href="/#" className="link">Delivery</a>
          </li>
          <li>
            <a href="/#" className="link">Lojas</a>
          </li>
          <li>
            <a href="/#" className="link">Lettering</a>
          </li>
        </ul>
      </div>

      <div className="buttons-wrapper">
        <ul className="buttons">
          <li>
            <a href="/#" className="btn">
              <img src={search} alt="Search" />
              <span className="sr-only">Search</span>
            </a>
          </li>
          <li>
            <a href="/#" className="btn">
              <img src={instagram} alt="Instagram" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>

          <li>
            <a href="/#" className="btn">
              <img src={whatsapp} alt="WhatsApp" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )

}

export default Nav