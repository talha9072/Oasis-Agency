import React from "react";

export default function CustomerReviewsSection() {
  return (
    <section className="pt-0 pb-5 md-pb-8 overlap-height overflow-hidden">
      <div className="container overlap-gap-section">
        <div
          className="row align-items-center justify-content-center"
          data-anime='{ "el": "childs", "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
        >
          {/* Left Side */}
          <div className="col-xl-5 col-lg-7 col-md-10 position-relative pe-xl-0 text-center text-xl-start lg-mb-10px">
            <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
              Customer Reviews
            </span>

            <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-10px w-80 lg-w-100">
              What people say about our service
              <span className="text-base-color">.</span>
            </h2>

            <div className="d-block mb-25px">
              See our 600+ reviews on{" "}
              <a
                href="https://g.page/r/your-google-business-link"
                target="_blank"
                rel="noreferrer"
              >
                Google
              </a>
            </div>

            <div className="d-flex justify-content-center justify-content-xl-start">
              <div
                className="slider-one-slide-prev-1 text-white swiper-button-prev slider-navigation-style-04 border border-1 border-color-medium-gray"
                role="button"
                aria-label="Previous slide"
              >
                <i className="bi bi-arrow-left-short icon-very-medium"></i>
              </div>

              <div
                className="slider-one-slide-next-1 text-white swiper-button-next slider-navigation-style-04 border border-1 border-color-medium-gray"
                role="button"
                aria-label="Next slide"
              >
                <i className="bi bi-arrow-right-short icon-very-medium"></i>
              </div>
            </div>
          </div>

          {/* Right Side – Swiper */}
          <div className="col-xl-7 col-lg-10 overflow-hidden">
            <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
              <div
                className="swiper slider-one-slide slider-shadow-right sm-slider-shadow-none magic-cursor overflow-visible ps-25px sm-p-0"
                data-slider-options='{ "slidesPerView": 1, "spaceBetween": 35, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 6000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 2 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
              >
                <div className="swiper-wrapper pt-30px pb-30px">
                  {reviews.map((review, index) => (
                    <div className="swiper-slide review-style-06" key={index}>
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="Google Reviews"
                          />

                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">
                              {review.name}
                            </div>
                            <p className="lh-22 d-block">
                              Verified Customer
                            </p>
                          </div>

                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-700 text-white d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px"></i>
                            {review.rating}
                          </div>
                        </div>

                        <p>{review.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================
   REVIEWS DATA
================================ */
const reviews = [
  {
    name: "Maryam A",
    rating: "5.0",
    text:
      "I had an amazing experience in my previous visit to EVS Garage. The team was helpful and attentive, ensuring that everything was as I asked for.",
  },
  {
    name: "Kesh Malli",
    rating: "5.0",
    text:
      "Very organized operation. Big clean and bright shop. Very busy and everything flows smoothly.",
  },
  {
    name: "Patrick B",
    rating: "5.0",
    text:
      "EVS provided exceptional service on my Sienna hybrid. They maintained communication and fixed it correctly the first time.",
  },
  {
    name: "Sami Ali",
    rating: "5.0",
    text:
      "Professional in every thing, very welcomed and honest in taking you through the real problem of the car.",
  },
];
