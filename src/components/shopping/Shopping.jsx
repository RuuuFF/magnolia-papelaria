import './Shopping.css'

const Shopping = props => {
  return (
    <div className="shopping-container">
      <header>
        <h2 className="shopping-title">COMO COMPRAR</h2>
      </header>

      <div className="shopping-steps">
        { props.children }
      </div>
    </div>
  )
}

export default Shopping