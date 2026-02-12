function Header() {

  return (
<header>
  <div className="banner-container">
    <img className="logo" src="./public/assets/iteration-1/logo.svg"/>

    <div className="banner-content">
      <p>fırsatı kaçırma</p>
      <h1>KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h1>
      <button className="btn radius" onClick={OrderPage}>ACIKTIM</button>
    </div>
  </div>
  <nav id="navbar">
    <div className="container nav-flex">
      <div className="nav-item"><img src="./images/iteration-2/icons/1.svg"/><a href="#">YENİ! Kore</a></div>
      <div className="nav-item"><img src="./images/iteration-2/icons/2.svg"/><a href="#">Pizza</a></div>
      <div className="nav-item"><img src="./images/iteration-2/icons/3.svg"/><a href="#">Burger</a></div>
      <div className="nav-item"><img src="./images/iteration-2/icons/4.svg"/><a href="#">Kızartmalar</a></div>
      <div className="nav-item"><img src="./images/iteration-2/icons/5.svg"/><a href="#">Fast Food</a></div>
      <div className="nav-item"><img src="./images/iteration-2/icons/6.svg"/><a href="#">İçecekler</a></div>
    </div>
  </nav>
</header>

  );
}

export default Header;