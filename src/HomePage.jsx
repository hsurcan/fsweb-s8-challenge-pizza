import styled, { createGlobalStyle } from "styled-components";

export default function HomePage({onAciktimClick}) {
  return (
    <>
      <GlobalStyle />

      <HeaderArea>
        <div className="header-logo">
          <img src="/images/iteration-1-images/logo.svg" alt="Logo" />
        </div>
        <p className="header-sub">fırsatı kaçırma</p>
        <h1 className="header-title">
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </h1>
        <button className="header-btn" 
        onClick={() => {onAciktimClick();}}>ACIKTIM</button>
      </HeaderArea>

      <NavWrapper>
        <SectionContainer>
          <ul className="nav-list">
            {[
              "Kore",
              "Pizza",
              "Burger",
              "Kızartmalar",
              "Fast food",
              "İçecek",
            ].map((item, i) => (
              <li key={i} className="nav-item">
                <img
                  src={`/images/iteration-2-images/icons/${i + 1}.svg`}
                  alt={item}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionContainer>
      </NavWrapper>

      <MainContentBeige>
        <OffersWrapper>
          <SectionContainer className="offers-grid">
            <div className="promo-card card-lg">
              <h2>
                Özel
                <br />
                Lezzetus
              </h2>
              <p>Position: Absolute Acı Burger</p>
              <button className="order-btn">SİPARİŞ VER</button>
            </div>

            <div className="promo-card card-dark">
              <h2>Hackathlon <br/> Burger Menü</h2>
              <button className="order-btn">SİPARİŞ VER</button>
            </div>

            <div className="promo-card card-beige">
              <h2>
                <span
                  className="offer-card-title-red"
                  style={{ color: "var(--color-red)" }}
                >
                  Çoooook
                </span>{" "}
                hızlı
                <br />
                npm gibi kurye
              </h2>
              <button className="order-btn">SİPARİŞ VER</button>
            </div>

          </SectionContainer>
        </OffersWrapper>

        <ProductWrapper>
          <SectionContainer>
            <div className="section-head">
              <p className="sub">en çok paketlenen menüler</p>
              <h2 className="title">Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>
            <ul className="tab-list">
              {[
                "Ramen",
                "Pizza",
                "Burger",
                "French fries",
                "Fast food",
                "Soft drinks",
              ].map((tab, i) => (
                <li
                  key={i}
                  className={`tab-item ${tab === "Pizza" ? "active" : ""}`}
                >
                  <img
                    src={`/images/iteration-2-images/icons/${i + 1}.svg`}
                    alt={tab}
                  />
                  <span>{tab}</span>
                </li>
              ))}
            </ul>
            <div className="cards-grid">
              {[
                { id: 1, name: "Terminal Pizza" },
                { id: 2, name: "Position Absolute Acı Pizza" },
                { id: 3, name: "useEffect Tavuklu Burger" },
              ].map((p) => (
                <article key={p.id} className="food-card">
                  <img
                    src={`/images/iteration-2-images/pictures/food-${p.id}.png`}
                    alt={p.name}
                  />
                  <h3>{p.name}</h3>
                  <div className="meta">
                    <span className="rating">4.9 <span>(200)</span></span>
                    <span className="price">60₺</span>
                  </div>
                </article>
              ))}
            </div>
          </SectionContainer>
        </ProductWrapper>
      </MainContentBeige>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-red: #ce2829;
    --color-yellow: #fdc913;
    --color-dark-gray: #292929;
    --color-beige: #faf7f2;
    --container-width: 1068px;
    --font-main: 'Barlow', sans-serif;
    --font-heading: 'Quattrocento', serif;
    --font-accent: 'Satisfy', cursive;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-main);
    background-color: white;
    overflow-x: hidden;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 15px;
`;

const MainContentBeige = styled.main`
  background-color: var(--color-beige);
  width: 100%;
`;

// HEADER
const HeaderArea = styled.header`
  width: 100%;
  min-height: 100vh;
  background: var(--color-red) url("/images/iteration-1-images/home-banner.png")
    no-repeat center bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 300px;

  .header-logo {
    margin-bottom: 50px;
    img {
      width: 300px;
    }
  }
  .header-sub {
    font-family: var(--font-accent);
    color: var(--color-yellow);
    font-size: 32px;
  }
  .header-title {
    color: white;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 300;
    line-height: 1.1;
  }
  .header-btn {
    background: var(--color-yellow);
    border: none;
    padding: 12px 50px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 30px;
  }
`;

//CATEGORY NAV
const NavWrapper = styled.nav`
  background: white;
  width: 100%;
  padding: 20px 0;
  .nav-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    img {
      width: 35px;
    }

    @media (max-width: 768px) {
      flex-direction: column; /* Üst üste diz */
      justify-content: center; /* Dikeyde ortala */
      text-align: center; /* Yazıyı ortala */
      padding: 10px;
    }
  }
`;

// OFFERS
const OffersWrapper = styled.section`
  padding: 80px 0;
  .offers-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
  }
  .promo-card {
    border-radius: 12px;
    padding: 40px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
  }
  .card-lg {
    grid-row: span 2;
    background-color: var(--color-red);
    background-image: url("/images/iteration-2-images/cta/kart-1.png");
    color: white;
    min-height: 460px;
    h2 {
      font-family: var(--font-heading);
      font-size: 68px;
      line-height: 1.2;
    }
  }
  .card-dark {
    background-color: var(--color-dark-gray);
    background-image: url("/images/iteration-2-images/cta/kart-2.png");
    color: white;
    min-height: 220px;
        h2 {
      font-size: 32px;
      line-height: 1.4;
    }
  }
  .card-beige {
    background-color: #faf7f2;
    background-image: url("/images/iteration-2-images/cta/kart-3.png");
    color: var(--color-dark-gray);
    min-height: 220px;
    .red-text {
      color: var(--color-red);
    }
    h2 {
      font-size: 32px;
      line-height: 1.4;
    }
  }
  .order-btn {
    align-self: flex-start;
    background: white;
    color: var(--color-red);
    border: none;
    padding: 10px 25px;
    border-radius: 50px;
    font-weight: 700;
    margin-top: 20px;
    cursor: pointer;
  }
`;

// PRODUCT SECTION
const ProductWrapper = styled.section`
  padding-bottom: 100px;
  .section-head {
    text-align: center;
    margin-bottom: 50px;
    .sub {
      font-family: var(--font-accent);
      color: var(--color-red);
      font-size: 32px;
    }
    .title {
      font-size: 42px;
      font-weight: 600;
      color: var(--color-dark-gray);
    }
  }
  .tab-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
  .tab-item {
    background: white;
    border-radius: 50px;
    padding: 12px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    &.active {
      background: var(--color-dark-gray);
      color: white;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border-radius: 12px;
      padding: 15px;
      height: auto;
    }
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
  .food-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .meta {
      display: flex;
      justify-content: space-between;;
    }
    .rating{
    display: flex;
    gap: 300px;
    font-weight: 500;
    }
    .price{
    font-weight: 700;}
    
  }
`;

