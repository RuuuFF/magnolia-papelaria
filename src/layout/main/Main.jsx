import './Main.css'

import Product from '../../components/Product'

import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="featured-products-container">
          <header>
            <h3>Produtos em destaque</h3>
          </header>

          <section className="featured-products">
            <Product
              image={image2}
              name="Bloco"
              brand="lubi pink bananas"
              price="69,90"
              soldOut={true}
            />
            <Product
              image={image3}
              name="Sketchbook"
              brand="lubi granellite"
              price="49,90"
              soldOut={false}
            />
            <Product
              image={image4}
              name="Caderno"
              brand="lubi sungrasses"
              price="57,90"
              soldOut={false}
            />
          </section>

          <footer>
            <a className="link-underline" href="/#">veja mais &gt;</a>
          </footer>
        </div> 
      </div>


    </main>
  )
}

export default Main