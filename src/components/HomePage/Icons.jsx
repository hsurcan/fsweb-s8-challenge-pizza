import styled from "styled-components"; 

function Icons() {

  return (
      <IconsSection>
      <section id="text-section">
          <div className="section-item">
              <p>en çok paketlenen menüler</p><br />
              <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
          </div>
      </section>
      <section id="icons">
              <div className="icon-section main-flex">
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/1.svg" /><a target="_blank" href="#ramen.html">Ramen</a>
                  </div>
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/2.svg" /><a target="_blank" href="#pizza.html">Pizza</a>
                  </div>
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/3.svg" /><a target="_blank" href="#burger.html">Burger</a>
                  </div>
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/4.svg" /><a target="_blank" href="#frenchfries.html">French fries</a>
                  </div>
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/5.svg" /><a target="_blank" href="#fastfood.html">Fast Food</a>
                  </div>
                  <div className="icon-item radius">
                      <img src="./images/iteration-2/icons/6.svg" /><a target="_blank" href="#softdrinks.html">Soft drinks</a>
                  </div>
              </div>
          </section>
          <section id="price">
              <div className="price-section main-flex">
                  <div className="price-card">
                      <img src="./images/iteration-2/pictures/food-1.png" />
                      <p>Terminal Pizza</p>
                      <div className="price-item">
                          <span>4.9 (200)</span>
                          <span>60₺</span>
                      </div>
                  </div>
                  <div className="price-card">
                      <img src="./images/iteration-2/pictures/food-2.png" />
                      <p>Position Absolute Acı Pizza</p>
                      <div className="price-item">
                          <span>4.9 (200)</span>
                          <span>60₺</span>
                      </div>
                  </div>
                  <div className="price-card">
                      <img src="./images/iteration-2/pictures/food-3.png" />
                      <p>useEffect Tavuklu Burger</p>
                      <div className="price-item">
                          <span>4.9 (200)</span>
                          <span>60₺</span>
                      </div>
                  </div>
              </div>
          </section>
    </IconsSection>
  )
}

export default Icons;

const IconsSection = styled.section`
.section-item{
text-align: center;
margin-top: 50px;
}

.section-item p{
  font-family: Satisfy;
  font-weight: 200;
  font-size: 32px;
  color: #CE2829;
}

.section-item h4{
  font-family: Barlow;
  font-weight: 500;
  font-size: 42px;
  color: #292929;
}

.main-flex{ 
  display: flex; 
  justify-content: space-between; 
  gap: 20px;
  max-width: 60%;  
}

.icon-section{
  gap: 10px;
  margin: 30px auto;
}

.icon-item{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: none;
  font-family: Barlow;
  font-weight: 400;
  font-size: 1rem;
  padding: 10px 20px;
  gap: 10px;
}

.icon-section :active{
  background: #1a1a1a;
  color: #fff;
}

.icon-item a{
  text-decoration: none;
  color: #000;
}

/*PRICE*/

.price-section{
  max-width: 60%;
  margin: 50px auto;
}

.price-card{
  width: 32%;
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 12px;
}

.price-card img{
  width: 100%;
}

.price-card p {
  font-family: Barlow;
  margin: 20px 0 10px;
  font-weight: 600;
}

.price-card span{
  font-family: Barlow;
}

.price-item {
  display: flex;
  justify-content: space-between;
}

.price-item span:last-child{
  font-weight: bold;
}

.price-item span:first-child{
  font-size: 0.8rem;
  word-spacing: 6rem;

.radius{
  border-radius: 50px;
}
}

@media (max-width: 600px){

  .section-item{
    align-items: center;
    max-width: 60%;
    margin: 0 auto;
  }

  .price-section{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px auto;
    min-width: 450px;
  }

  .price-card{
    width: 100%;
  }
};
  `