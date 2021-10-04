import './Card.css'

const Card = props => {
  return (
    <div className="card-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="card-content">
            <h2>
              <span>
                Eu <img src={ props.icon } alt="Heart" />
              </span>
              <span>planejar</span>
            </h2>
            <p>Planners, blocos e agendas para deixar suas metas mais <span>organizadas</span></p>
            <a className="link-underline" href="/#">eu quero &gt;</a>
          </div>
          <div className="card-image-container">
            <img className="card-image" src={ props.image } alt="Five" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card