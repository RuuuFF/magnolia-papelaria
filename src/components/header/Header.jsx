import image1 from '../../assets/images/image1.svg'

import './Header.css'

const Header = props => {
  return (
    <header>
      <div className="warning-box">
        <div className="warning">
          <span>Frete grátis acima de R$ 250,00</span>
        </div>
      </div>
      
      <div className="container">
        { props.children }
      </div>

      <div className="banner-wrapper">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <h2>
                <span>coleção</span>
                <span>Felícia</span>
              </h2>
              <a href="/#">confira &gt;</a>
            </div>
            <div className="banner-image">
              <img src={image1} alt="First Image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header