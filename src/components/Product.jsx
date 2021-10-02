const Product = props => {
  return (
    <article className="product">
      <a href="/#">
        <img className="product-image" src={ props.image } alt={ props.name } />
        <span className="product-name">{ props.name }</span>
        <span className="product-brand">{ props.brand }</span>
        <span className="product-price">R&#36;{ props.price }</span>
      </a>
      { props.soldOut === true ? <span className="product-soud-out">Esgotado&#33;</span> : ''}
    </article>
  )
}

export default Product