import styled from "styled-components";

function Cards() {
    
  return (
    <CardsSection>
      <div className="siparis-container">
   <div className="siparis-card main">
    <div className="siparis-content">
      <h2>Özel<br/> Lezzetus</h2>
      <p>Position:Absolute Acı Burger</p>
      <button className="btn2 radius">SİPARİŞ VER</button>
    </div>
  </div>
  </div>

  <div className="siparis-container2">
   <div className="siparis-card2 main">
    <div className="siparis-content2 small">
      <h3>Hackathlon<br/>Burger Menü</h3>
      <button className="btn2 radius">SİPARİŞ VER</button>
    </div>
  </div>

  <div className="siparis-card3 main">
    <div className="siparis-content3 small">
      <h3><span>Çoooook</span> hızlı <br/>npm gibi kurye</h3>
      <button className="btn2 radius">SİPARİŞ VER</button>
    </div>
   </div>
 </div>
</CardsSection>
    )
}

const CardsSection = styled.main`
.siparis-container{
  display: flex;
  max-width: 60%;
  gap: 10px;
  margin: 50px auto 10px;
}

.siparis-container2{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main{
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
}

.siparis-card{
  width: 500px;
  height: 440px;
  background-image: url(./public/assets/iteration-2/cta/kart-1.png);
}

.siparis-card2{
  width: 500px;
  height: 210px;
  background-image: url(./public/assets/iteration-2/cta/kart-2.png);
}

.siparis-card3{
  background-image: url(./public/assets/iteration-2/cta/kart-3.png);
  width: 500px;
  height: 210px;
}

.siparis-content{
  position: absolute;
  top: 32px;
  left: 32px;
  color: #FFFFFF;
}

.siparis-content h2{
  font-family: Quattrocento;
  font-size: 60px;
  font-weight: 700;
  color: white;
}

.siparis-content p{
  font-family: Barlow;
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin: 20px 0;
}

.btn2{
  width: 138px;
  height: 48px;
  background-color: white;
  color: #CE2829;
  font-family: Barlow;
  font-weight: 600;
  font-size: 14px;
  border: none;
  margin-top: 5px;
}

.siparis-content2, .siparis-content3{
  position: absolute;
  top: 32px;
  left: 32px;
}

.siparis-content2 h3{
  font-family: Barlow;
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.siparis-content3 h3{
  font-family: Barlow;
  font-size: 32px;
  font-weight: 600;
  color: black;
  margin-bottom: 20px;
}

.siparis-content3 span{
  color: #CE2829;
}

.radius{
  border-radius: 50px;
}

@media (max-width: 600px){

  .siparis-container{
    flex-wrap: wrap;
    margin: 50px auto;
    min-width: 450px;
  }

  .siparis-card{
    height: 330px;
    margin-bottom: 10px;
  }

  .siparis-card2, .siparis-card3{
    height: 270px;
    width: 450px;
    background-size: auto;
    background-repeat: no-repeat;
  }
};
`;

export default Cards;