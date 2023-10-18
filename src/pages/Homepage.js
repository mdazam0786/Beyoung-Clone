import React, { useEffect, useState } from "react";
import "./homepage/footer3/footer-content.css";
import "./homepage/footer3/footer-main.css";
import "./homepage/footer3/footer-bottom.css";
import "./homepage/footer3/footer-copyright.css";
import "./homepage/footer-top2/footer-top.css";
import Navbar from "../component/Navbar";
import "./homepage/desktop1/ads.css";

export default function Homepage() {
  // for carousel 
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => !prevSlide);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <section className="desktop">
        <div>
          {slide ? (
            // Display your first image here
            <img
              src="https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-desktop-vieww1.jpg"
              alt="Image 1"
            />
          ) : (
            // Display your second image here
            <img
              src="https://www.beyoung.in/api/catalog/home-19-8-23/new/Cricket-World-Cup-home-page-banner-desktop-view.jpg"
              alt="Image 2"
            />
          )}
        </div>
        <section className="Homepage-parent">
          <section className="Homepage-ads">
            <a className="Homepage-ads1">
              <img
                src="https://www.beyoung.in/api/catalog/homepage-05-06-23/Travel-Campaign.jpg"
                alt="add Photo"
              />
            </a>
            <a className="Homepage-ads2">
              <img
                src="https://www.beyoung.in/api/catalog/home-19-7-23/shop-the-look-home-page-section-f.jpg"
                alt="add Photo"
              />
            </a>
          </section>
        </section>
      </section>

      <div className="footer-top">
        <img
          src="https://www.beyoung.in/api/catalog/footer/footerdesktop-strip.jpg"
          alt="Pic"
        />
        <a href="https://www.beyoung.in/in-the-news">
          <img
            src="https://www.beyoung.in/api/catalog/footer/pr-strip-banner.jpg"
            alt=""
          />
        </a>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <p className="footer-heading">need help</p>
              <div className="footer-link">
                <a href="/">Contact Us</a>
                <a href="/">Track Order</a>
                <a href="/">Return & Refunds</a>
                <a href="/">FAQ's</a>
                <a href="/">Career</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">company</p>
              <div className="footer-link">
                <a href="/">About Us</a>
                <a href="/">Beyoung Blog</a>
                <a href="/">Beyoungistan</a>
                <a href="/">Collaboration</a>
                <a href="/">Media</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">more info</p>
              <div className="footer-link">
                <a href="/">Term and Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Shipping Policy</a>
                <a href="/">Sitemap</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">location</p>
              <div className="footer-link">
                <a href="/">support@beyoung.in</a>
                <span>Eklingpura Chouraha, Ahmedabad Main Road</span>
                <span>(NH 8- Near Mahadev Hostel) Udaipur, India- 313002</span>
              </div>
              <p className="footer-heading">download the app</p>
              <div className="footer-app-link">
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png"
                    alt="beyoung android app"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png"
                    alt="beyoung apple app"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="why-choose-us-main">
              <section className="choose-heading">
                <p>why choose us?</p>
              </section>
              <section className="op-toggle">
                <div className="home-content">
                  <div className="sub-content">
                    <h1>Online Shopping Site</h1>
                    <h2>
                      India's Best Online Shopping Site for Fashion and
                      Lifestyle
                    </h2>
                    <p>
                      " Started in 2018, Beyoung is the Best Site for online
                      shopping in India when it comes to a vast collection of
                      men's and women's fashion. The latest trends and styles
                      are showcased here, yes at your favorite online fashion
                      store. Well, if fashion is medicine, then Be Young is the
                      chemist shop where you can do your online shopping for
                      fashion with ease. Nothing to brag about, but we are the
                      classic blend of 'Creativity' and 'Style'. Get The Young
                      Out with Beyoung, our slogan says a lot about us. Our
                      website is filled with the cool outfits that you always
                      crave. Indeed, online shopping for women and men at
                      Beyoung is hassle-free that in just a few clicks, one can
                      purchase whatever he/she wants. A one-stop destination for
                      all your shopping needs, Beyoung caters to each taste and
                      need of every personality. The premium quality, affordable
                      style, and trending graphics go into the making of our
                      vast collection of men's and "
                    </p>
                  </div>
                </div>
                <section>
                  <span
                    id="content_more
                    "
                  >
                    Read More
                  </span>
                </section>
              </section>
            </div>
            <div className="sitemap-main">
              <section className="sitemap-heading">
                <p>popular calegories</p>
              </section>
              <section className="sitemap-toggle">
                <div className="sitemap-content">
                  <section className="footer-cat-link">
                    <p className="heading-sitemap">
                      <a href="/">Men's Clothing</a>
                    </p>
                    <p>
                      <strong>Topwear:</strong>
                      <a href="/">Half Sleeve T-shirts</a>
                      <a href="/">Full Sleeve T-shirts</a>
                      <a href="/">Men's Shirts</a>
                      <a href="/">Printed T-shirts</a>
                      <a href="/">Half Sleeve T-shirts</a>
                    </p>
                    <p>
                      <strong>Theme Based T Shirts:</strong>
                      <a href="/">Ipl T-Shirts</a>
                      <a href="/">Men's Travel T-Shirts</a>
                      <a href="/">Cartoon</a>
                    </p>
                  </section>
                  <section className="footer-cat-link">
                    <p className="heading-sitemap">
                      <a href="/">Women's Clothing</a>
                    </p>
                    <p>
                      <strong>Topwear:</strong>
                      <a href="/">Half Sleeve T-shirts</a>
                      <a href="/">Full Sleeve T-shirts</a>
                      <a href="/">Wonen Shirts</a>
                      <a href="/">Printed T-shirts</a>
                      <a href="/">Half Sleeve T-shirts</a>
                      <a href="/">Kurti</a>
                      <a href="/">Crop Tops</a>
                    </p>
                    <p>
                      <strong>Theme Based T Shirts:</strong>
                      <a href="/">Ipl T-Shirts</a>
                      <a href="/">Women's Travel T-Shirts</a>
                      <a href="/">Feminist T-shirts</a>
                    </p>
                  </section>
                  <section className="footer-cat-link">
                    <p className="heading-sitemap">
                      <strong>Customization</strong>
                    </p>
                    <p>
                      <a href="/">Custom T Shirts</a>
                    </p>
                  </section>
                  <section className="footer-cat-link">
                    <p className="heading-sitemap">
                      <strong>Cuple Wear</strong>
                    </p>
                    <p>
                      <a href="/">Couple Boxer</a>
                      <a href="/">Couple T Shirts</a>
                    </p>
                  </section>
                  <section className="footer-cat-link">
                    <p className="heading-sitemap">
                      <strong>Bottomwear:</strong>
                    </p>
                    <p>
                      <a href="/">Mens Boxer</a>
                      <a href="/">Womens Boxer</a>
                      <a href="/">Jeggings</a>
                      <a href="/">Men Sweatpants</a>
                      <a href="/">Mens Joggers</a>
                      <a href="/">Chino Pants</a>
                      <a href="/">Mens Jeans</a>
                      <a href="/">Mens Pyjamas</a>
                    </p>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="secqure-payment">
              <p>100% SECURE PAYMENT</p>
              <img
                className="pyment-app"
                src="https://www.beyoung.in/api/catalog/footer/Frame-payment%20-1.jpg"
                alt="image"
              />
            </div>
            <div className="social-links">
              <p>LET'S BE FRIENDS</p>
              <div className="social-icon">
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame3-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame4-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame4-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame6-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame7-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://www.beyoung.in/api/catalog/footer/Frame8-1.jpg"
                    alt="Online Shopping Site in India"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2023 Beyoung Folks Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// export default Homepage;
