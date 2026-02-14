import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
        <FooterSection>
            <div className="footer-wrap">
              <div className="footer-info">
                <div className="footer-logo">
                  <img
                    src="/images/iteration-2-images/footer/logo-footer.svg"
                    alt="Logo"
                  />
                </div>
                <ul className="contact-list">
                  <li className="contact-item">
                    <img
                      src="/images/iteration-2-images/footer/icons/icon-1.png"
                      alt="Konum"
                      className="contact-icon"
                    />
                    <span className="contact-text">
                      341 Londonderry Road, <br /> Istanbul Türkiye
                    </span>
                  </li>
                  <li className="contact-item">
                    <img
                      src="/images/iteration-2-images/footer/icons/icon-2.png"
                      alt="Mail"
                      className="contact-icon"
                    />
                    <span className="contact-text">
                      aciktim@teknolojikyemekler.com
                    </span>
                  </li>
                  <li className="contact-item">
                    <img
                      src="/images/iteration-2-images/footer/icons/icon-3.png"
                      alt="Tel"
                      className="contact-icon"
                    />
                    <span className="contact-text">+90 216 123 45 67</span>
                  </li>
                </ul>
              </div>

              <div className="footer-nav">
                <h3 className="footer-head">Hot Menu</h3>
                <ul className="footer-list">
                  <li className="footer-link">Terminal Pizza</li>
                  <li className="footer-link">5 Kişilik Hackathlon Pizza</li>
                  <li className="footer-link">useEffect Tavuklu Pizza</li>
                  <li className="footer-link">Beyaz Console Frosty</li>
                  <li className="footer-link">Testler Geçti Mutlu Burger</li>
                  <li className="footer-link">Position Absolute Acı Burger</li>
                </ul>
              </div>

              <div className="footer-social">
                <h3 className="footer-head">Instagram</h3>
                <div className="insta-grid">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="insta-item">
                      <img
                        src={`/images/iteration-2-images/footer/insta/li-${i}.png`}
                        alt="Insta"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-copy">
              <div className="copy-content">
                <p>© 2023 Teknolojik Yemekler.</p>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
        </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: #1a1a1a;
  color: white;
  padding-top: 80px;
  width: 100%;
  position: relative;

  .footer-wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1068px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-info {
    width: 300px;
  }
  .footer-logo img {
    width: 250px;
    margin-bottom: 40px;
  }
  .contact-list {
    list-style: none;
    .contact-item {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      align-items: flex-start;
      .contact-icon {
        width: 20px;
        margin-top: 4px;
      }
    }
  }
  .footer-head {
    margin-bottom: 30px;
    font-size: 20px;
  }
  .footer-list {
    list-style: none;
    .footer-link {
      margin-bottom: 12px;
      opacity: 0.8;
      font-size: 16px;
    }
  }
  .insta-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 280px;
    .insta-item img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .footer-copy {
    border-top: 1px solid #333;
    padding: 30px 0;
    .copy-content {
      display: flex;
      justify-content: space-between;
      max-width: 1068px;
      margin: 0 auto;
      opacity: 0.8;
      align-items: center;
      padding: 0 15px;
    }
  }
`;