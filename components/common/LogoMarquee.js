export default function LogoMarquee() {
  const IMAGE_BASE =
    "https://evsuae.com/.netlify/images?url=/img/logo/";

  const logos = [
    "tesla-logo.svg",
    "byd-logo.svg",
    "avatr-logo.svg",
    "rox-logo.svg",
    "zeekr-logo.svg",
    "tesla-logo.svg",
    "byd-logo.svg",
    "avatr-logo.svg",
    "rox-logo.svg",
    "zeekr-logo.svg",
  ];

  return (
    <section className="pt-20px pb-20px border-bottom border-color-medium-gray">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{ 
              "slidesPerView": "auto",
              "spaceBetween": 0,
              "centeredSlides": true,
              "speed": 12000,
              "loop": true,
              "allowTouchMove": false,
              "autoplay": { "delay": 1, "disableOnInteraction": false },
              "keyboard": { "enabled": true, "onlyInViewport": true }
            }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">

              {logos.map((logo, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white d-flex align-items-center">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>

                    <img
                      src={`${IMAGE_BASE}${logo}`}
                      width="200"
                      height="75"
                      loading="lazy"
                      alt={logo.replace("-logo.svg", " logo")}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
