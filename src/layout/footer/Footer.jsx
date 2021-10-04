import './Footer.css'

import envelope from '../../assets/icons/envelope.svg'

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-container">
          { props.children }

          <div className="newsletter-container">
            <div className="newsletter-image-container">
              <img className="newsletter-image" src={envelope} alt="Envelope" />
            </div>

            <div className="newsletter-title-container">
              <p className="newsletter-title">
                <span>assine</span>
                <br />
                <span>nossa Newsletter</span>
              </p>
            </div>

            <div className="newsletter-input-container">
              <form className="newsletter-form">
                <div className="input-field">
                  <label className="sr-only" htmlFor="name">Nome</label>
                  <input type="text" placeholder="Nome" />
                </div>

                <div className="input-field">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input type="text" placeholder="E-mail" />
                </div>

                <div className="button-field">
                  <button>Assinar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer