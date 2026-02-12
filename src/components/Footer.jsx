function Footer() {
    return (
    
<footer>
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
</footer>
    )
}

export default Footer;
