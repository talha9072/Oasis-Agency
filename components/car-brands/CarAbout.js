"use client";

export default function CarAbout({
  sectionClass = "position-relative pb-5 xs-pb-50px",

  imageSrc,
  imageSrcSet,
  imageWidth = 580,
  imageHeight = 387,
  imageAlt = "About car image",

  iconClass = "bi bi-lightning-charge-fill text-base-color fs-100 position-absolute right-minus-20px top-100px lg-top-60px md-right-100px sm-right-20px xs-right-0px",

  heading,
  headingHighlight = ".",
  description,
}) {
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE COLUMN */}
          <div
            className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-center position-relative"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            <img
              src={imageSrc}
              srcSet={imageSrcSet}
              width={imageWidth}
              height={imageHeight}
              sizes="100vw"
              className="w-100 border-radius-15px"
              alt={imageAlt}
            />

            {/* ICON OVERLAY */}
            <i
              className={iconClass}
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
            ></i>
          </div>

          {/* CONTENT COLUMN */}
          <div
            className="col-lg-6 order-1 order-lg-2 md-mb-50px sm-mb-30px"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
              {heading}
              <span className="text-base-color">{headingHighlight}</span>
            </h2>

            <p className="mb-30px">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
