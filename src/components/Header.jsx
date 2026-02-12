import { useState } from "react";
import styled from "styled-components";

function Header({ setActivePage }) {

  return (
    <HeaderWrapper> 
<header>
  <div className="banner-container">
    <img className="logo" src="./public/assets/iteration-1/logo.svg"/>

    <div className="banner-content">
      <p>fırsatı kaçırma</p>
      <h1>KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h1>
      <button className="btn radius" onClick={() => setActivePage("order")}>ACIKTIM</button>
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
</HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
.banner-container{
  background-image: url(./public/assets/iteration-1/home-banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}

.logo{
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
 
.banner-content{
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.banner-content p{
  color: #FDC913;
  font-family: Satisfy;
  font-weight: lighter;
  font-size: 28px;
}

.banner-content h1{
  color: #fff;
  font-family: Roboto Condensed;
  font-weight: 300;
  font-size: 4.5rem;
}

.btn{
  font-family: Barlow;
  font-weight: 600;
  font-size: 1rem;
  background: #FDC913;
  border: none;
  margin-top: 10px;
  padding: 15px 55px;
}

/*NAV*/
.radius{
  border-radius: 50px;
}

#navbar{
  background-color: #fff;
}

.container{
  max-width: 60%;
  margin: 0 auto;
}

.nav-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 94px;
}

.nav-item{
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-item a{
  font-family: Barlow;  
  font-size: 1rem;
  color: black;
  text-decoration: none;
}
`;
 
export default Header;