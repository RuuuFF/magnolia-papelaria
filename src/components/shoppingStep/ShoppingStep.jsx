import './ShoppingStep.css'

const ShoppingStep = props => {
  return (
    <article className="shopping-step">
      <img className="shopping-image" src={ props.image } alt={ props.alt } />
      <p className="shopping-description">
        { props.descriptionOne }
        { props.descriptionTwo ? <br /> : '' }
        { props.descriptionTwo }  
      </p>
    </article>
  )
}

export default ShoppingStep