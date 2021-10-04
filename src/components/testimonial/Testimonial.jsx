import './Testimonial.css'

const Testimonial = props => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <div className="testimonial-button-container left">
          <button className="testimonial-button">
            <img src={ props.arrowLeft } alt="Arrow Left" />
          </button>
        </div>

        <div className="testimonial-content">
          <span className="testimonial">É sempre um prazer visitar a Magnólia. Por mais que eu já tenha material suficiente em casa, amo trazer novos itens que só deixam minha escrivaninha e estojo mais lindos e especiais. A qualidade de todos os produtos é impecável! As tintas são bem marcantes.</span>
          <span className="testimonial-author">CAROL SOUZA</span>
        </div>

        <div className="testimonial-button-container right">
          <button className="testimonial-button">
            <img src={ props.arrowRight } alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial