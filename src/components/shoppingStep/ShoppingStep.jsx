import './ShoppingStep.css'

const ShoppingStep = props => {
  return (
    <article className="shopping-step">
      <img className="shopping-image" src={ props.image } alt={ props.alt } />
      <span className="shopping-description">
        { props.descriptionOne }
        <br />
        { props.descriptionTwo}  
      </span>
    </article>
  )
}

export default ShoppingStep