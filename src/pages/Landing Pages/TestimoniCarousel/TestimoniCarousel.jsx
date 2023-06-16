import React from "react";
// import image from '../../../assets/img/woman-1730325 1.svg'
import "../TestimoniCarousel/TestimoniCarousel.css";

const TestimoniCarousel = () => {
  return (
    <>
      <h3 className="textTestimoni">What do they say about GoFit's program?</h3>
      <div className="testimoni" id="testimoni">
        <div id="carouselIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to={0}
              className="active slide"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to={1}
              className="slide"
              aria-label="Slide 2"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-testimoni">
                    <img
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                      }
                      className="card-img-top-testimoni"
                      alt="Gambar"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Thomas Alex</h5>
                    <p className="card-text">
                      “Places that are clean and have high hygiene standards and
                      pay attention to health protocols during a pandemic”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimoniCarousel;
