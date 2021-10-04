import './Posters.css'

const Posters = () => {
  return (
    <div className="posters-container">
      <article className="poster">
        <div className="poster-content">
          <h2 className="poster-title">
            <span>Seja um</span>
            <br />
            <span>Franqueado&#33;</span>
          </h2>
        </div>
      </article>

      <article className="poster">
        <div className="poster-content">
          <h2 className="poster-title">
            <span>Lettering</span>
            <br />
            <span>para iniciantes</span>
          </h2>
        </div>
      </article>

      <article className="poster">
        <div className="poster-content">
          <h2 className="poster-title">Ofertas&#33;</h2>
          <p>
            Produtos com
            <br />
            preços imperdíveis&#33;
          </p>
        </div>
      </article>
    </div>
  )
}

export default Posters