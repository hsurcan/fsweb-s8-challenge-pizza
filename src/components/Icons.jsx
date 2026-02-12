function Icons() {

  return (
      <>
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
          
    </>
  )
}

export default Icons;