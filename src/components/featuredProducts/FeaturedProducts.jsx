import React from 'react'
import './FeaturedProducts.css'

const FeaturedProducts = props => {
  return (
    <div className="featured-products-container">
      <header>
        <h3>Produtos em destaque</h3>
      </header>

      <section className="featured-products">
        { props.children }
      </section>

      <footer>
        <a className="link-underline" href="/#">veja mais &gt;</a>
      </footer>
    </div> 
  )
}

export default FeaturedProducts