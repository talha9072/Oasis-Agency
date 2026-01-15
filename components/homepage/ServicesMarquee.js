// components/homepage/ServicesMarquee.js
import { useEffect } from "react";

export default function ServicesMarquee() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initSwiper = () => {
      // Litho main.js swiper handler
      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.swiper) {
        // Force reflow + re-init
        window.dispatchEvent(new Event("resize"));
      }

      // HARD FIX: re-trigger Litho swiper init
      if (window.initSwiper) {
        window.initSwiper();
      }

      // SAFETY: re-run main.js logic if exposed
      if (window.litho && window.litho.init) {
        window.litho.init();
      }
    };

    // Delay to wait for hydration + scripts
    const t1 = setTimeout(initSwiper, 300);
    const t2 = setTimeout(initSwiper, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="snap-section pt-45px pb-40px border-color-medium-gray sm-pt-35px sm-pb-30px">
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
              "keyboard": { "enabled": true, "onlyInViewport": true },
              "effect": "slide"
            }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {[
                "EV Vehicle Health Check",
                "EV Repair",
                "High Voltage Battery Repair",
                "EV Drive Unit Repair",
                "EV Sim Card installation",
                "Navigation system and Mapping",
                "EV Software updates",
                "EV Body Repair",
                "EV Warranty Packages",
                "EV Roadside Assistance",
              ].map((item, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                    <p className="service-swiper">
                      <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                      {item}
                    </p>
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
