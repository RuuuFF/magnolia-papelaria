import './Main.css'

import Product from '../../components/product/Product'
import ShoppingStep from '../../components/shoppingStep/ShoppingStep'

import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'

import heartIcon from '../../assets/icons/heart.svg'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import cart from '../../assets/icons/cart.svg'
import creditCard from '../../assets/icons/credit-card.svg'
import truck from '../../assets/icons/truck.svg'

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

      <div className="card-wrapper">
        <div className="container">
          <div className="card-container">
            <div className="card-content">
              <h2>
                <span>
                  Eu <img src={heartIcon} alt="Heart" />
                </span>
                <span>planejar</span>
              </h2>
              <p>Planners, blocos e agendas para deixar suas metas mais <span>organizadas</span></p>
              <a className="link-underline" href="/#">eu quero &gt;</a>
            </div>
            <div className="card-image-container">
              <img className="card-image" src={image5} alt="Five" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="testimonial-wrapper">
          <div className="testimonial-container">
            <div className="testimonial-button-container left">
              <button className="testimonial-button">
                <img src={arrowLeft} alt="Arrow Left" />
              </button>
            </div>

            <div className="testimonial-content">
              <span className="testimonial">É sempre um prazer visitar a Magnólia. Por mais que eu já tenha material suficiente em casa, amo trazer novos itens que só deixam minha escrivaninha e estojo mais lindos e especiais. A qualidade de todos os produtos é impecável! As tintas são bem marcantes.</span>
              <span className="testimonial-author">CAROL SOUZA</span>
            </div>

            <div className="testimonial-button-container right">
              <button className="testimonial-button">
                <img src={arrowRight} alt="Arrow Right" />
              </button>
            </div>
          </div>
        </div>

        <div className="shopping-container">
          <header>
            <h2 className="shopping-title">COMO COMPRAR</h2>
          </header>

          <div className="shopping-steps">
            <ShoppingStep 
              descriptionOne="Adicione o produto"
              descriptionTwo="no carrinho"
              image={cart}
              alt="Cart"
            />
            <ShoppingStep 
              descriptionOne="Pagamento no"
              descriptionTwo="boleto ou cartão"
              image={creditCard}
              alt="Credit Card"
            />
            <ShoppingStep 
              descriptionOne="Entrega em"
              descriptionTwo="todo o Brasil"
              image={truck}
              alt="Truck"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main