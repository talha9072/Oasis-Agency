"use client";

export default function CarServices({
  sectionId = "service-slider",
  sectionClass = "pt-0 xs-pt-30px",

  heading,

  animeData = '{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }',

  sliderOptions = '{"slidesPerView":4,"spaceBetween":30,"centeredSlides":true,"speed":6000,"loop":true,"pagination":{"el":".slider-four-slide-pagination-2","clickable":false},"allowTouchMove":true,"autoplay":{"delay":1,"disableOnInteraction":false},"navigation":{"nextEl":".slider-four-slide-next-2","prevEl":".slider-four-slide-prev-2"},"keyboard":{"enabled":true,"onlyInViewport":true},"effect":"slide","breakpoints":{"0":{"slidesPerView":1,"spaceBetween":10,"centeredSlides":false},"768":{"slidesPerView":2,"spaceBetween":20},"992":{"slidesPerView":3,"spaceBetween":25},"1200":{"slidesPerView":4,"spaceBetween":30}}}',

  services = [],
}) {
  return (
    <section id={sectionId} className={sectionClass}>
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col-lg-12 d-flex align-items-center justify-content-center position-relative xs-mb-0px"
            data-anime={animeData}
          >
            <h2 className="fw-700 alt-font text-white text-center ls-minus-2px pb-2">
              {heading}
            </h2>
          </div>

          <div
            className="col swiper text-center"
            data-slider-options={sliderOptions}
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {services.map((service, index) => (
                <div className="swiper-slide" key={index}>
                  <a href={service.link}>
                    <div className="service-box">
                      <div className="img-container pb-5 w-30 align-items-center mx-auto">
                        <img
                          src={service.icon}
                          width="150"
                          height="150"
                          alt={service.alt}
                        />
                      </div>

                      <div className="text-container text-center mb-0 mt-4">
                        <h3 className="fs-24 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                          {service.title}
                        </h3>
                        <p className="fs-16 mb-0">{service.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
