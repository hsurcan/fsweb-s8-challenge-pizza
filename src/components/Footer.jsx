import styled from "styled-components"; 

function Footer() {
    return (
    
<FooterSection  className="footer">
<div className="last-section main-flex">

  <div className="iletisim">
    <img className="logo-footer" src="./images/iteration-2-images/footer/logo-footer.svg"/>
   
    <div className="adres">
    <img src="./images/iteration-2-images/footer/icons/icons/icon-1.png"/>
    <p>341 Londonderry Road,<br/>
Istanbul Türkiye</p>
    </div>

    <div className="email">
      <img src="./images/iteration-2-images/footer/icons/icons/icon-2.png"/>
      <p>aciktim@teknolojikyemekler.com</p>
    </div>

    <div className="telefon">
      <img src="./images/iteration-2-images/footer/icons/icons/icon-3.png"/>
      <p>+90 216 123 45 67</p>
    </div>
  </div>

  <div className="hot-menu">
    <h5>Hot Menu</h5>
    <p>Terminal Pizza</p>
    <p>5 Kişilik Hackathlon Pizza</p>
    <p>useEffect Tavuklu Pizza</p>
    <p>Beyaz  Console Frosty</p>
    <p>Testler Geçti Mutlu Burger</p>
    <p>Position Absolute Acı Burger</p>
  </div>

  <div className="instagram">
    <h5>Instagram</h5>
    <div className="ig-grid">
    <img src="./images/iteration-2-images/footer/insta/insta-1.png"/>
    <img src="./images/iteration-2-images/footer/insta/insta-2.png"/>
    <img src="./images/iteration-2-images/footer/insta/insta-3.png"/>
    <img src="./images/iteration-2-images/footer/insta/insta-4.png"/>
    <img src="./images/iteration-2-images/footer/insta/insta-5.png"/>
   </div>
   </div>
  </div>

  <hr/>

  <div className="copyright main-flex">
    <p>© 2023 Teknolojik Yemekler. </p>
    <i className="fa-brands fa-twitter"></i>
    </div>
</FooterSection >
  
    )
}
export default Footer;

const FooterSection = styled.footer`
  footer{
  background-color: #1A1A1A;
}

.last-section{
  max-width: 60%;
  margin: 0 auto;
  padding: 30px 0;
}

.iletisim, .hot-menu, .instagram, .copyright p{
  color: #FFFFFF;
  font-family: Barlow;
}

.iletisim{
  display: flex;
  flex-direction: column;
}

.adres, .email, .telefon{
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
}

.adres{
  line-height: 1.5rem;
}

.logo-footer{
  width: 180px;
  padding: 20px 0;
  margin-bottom: 20px;
}

.iletisim p, .hot-menu p, .copyright p{
  font-size: 0.9rem;
  font-weight: 200;
}

.last-section h5{
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 100px;
}

.hot-menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ig-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

footer hr {
  border: 1px solid #333;
}

.copyright {
  color: #FFFFFF;
  padding: 30px 0;
  margin: 0 auto;
}
`;