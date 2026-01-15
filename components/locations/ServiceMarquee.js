"use client";

import { useEffect, useRef } from "react";

export default function ServiceMarquee() {
  const swiperInstances = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.Swiper) return;

    const elements = document.querySelectorAll(".swiper");

    elements.forEach((el) => {
      // Prevent double initialization
      if (el.swiper) return;

      let options = {};
      try {
        options = JSON.parse(el.getAttribute("data-slider-options") || "{}");
      } catch (e) {
        console.error("Invalid Swiper options JSON", e);
      }

      const instance = new window.Swiper(el, options);
      swiperInstances.current.push(instance);
    });

    return () => {
      // Proper cleanup on unmount / route change
      swiperInstances.current.forEach((swiper) => {
        if (swiper && swiper.destroy) {
          swiper.destroy(true, true);
        }
      });
      swiperInstances.current = [];
    };
  }, []);

  return (
    <section className="snap-section pt-45px pb-40px border-color-medium-gray sm-pt-35px sm-pb-30px">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{
              "slidesPerView":"auto",
              "spaceBetween":0,
              "centeredSlides":true,
              "speed":12000,
              "loop":true,
              "allowTouchMove":false,
              "autoplay":{"delay":1,"disableOnInteraction":false},
              "keyboard":{"enabled":true},
              "effect":"slide"
            }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {[
                "EV Vehicle Health Check",
                "EV Repair",
                "High Voltage Battery Repair",
                "EV Drive Unit Repair",
                "EV Sim Card Installation",
                "Navigation System and Mapping",
                "EV Software Updates",
                "EV Body Repair",
                "EV Warranty Packages",
                "EV Roadside Assistance",
              ].map((text, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                    <h2 className="service-swiper">
                      <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                      {text}
                    </h2>
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
