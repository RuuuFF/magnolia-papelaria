import './Main.css'

import FeaturedProduct from '../../components/featuredProducts/FeaturedProducts'
import Product from '../../components/product/Product'
import Card from '../../components/card/Card'
import Testimonial from '../../components/testimonial/Testimonial'
import Shopping from '../../components/shopping/Shopping'
import ShoppingStep from '../../components/shoppingStep/ShoppingStep'
import Posters from '../../components/posters/Posters'

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
        <FeaturedProduct>
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
        </FeaturedProduct>
      </div>

      <Card 
        icon={heartIcon}
        image={image5}
      />

      <div className="container">
        <Testimonial 
          arrowLeft={arrowLeft}
          arrowRight={arrowRight}
        />

        <Shopping>
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
        </Shopping>

        <Posters />
      </div>
    </main>
  )
}

export default Main