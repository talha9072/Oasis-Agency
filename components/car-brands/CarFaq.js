"use client";

export default function CarFaq({
  sectionClass = "big-section pt-0",

  heading = "Frequently Asked Questions",

  headingAnime = '{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }',

  accordionId = "accordion-style-02",

  accordionAnime = '{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }',

  faqs = [],
}) {
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="row">
          {/* HEADING */}
          <div
            className="col-lg-12 d-flex align-items-center justify-content-center position-relative md-mb-0px"
            data-anime={headingAnime}
          >
            <h2 className="fw-700 alt-font text-white text-center ls-minus-2px">
              {heading}
            </h2>
          </div>

          {/* ACCORDION */}
          <div className="col-lg-10 mx-auto">
            <div
              className="accordion accordion-style-02"
              id={accordionId}
              data-active-icon="icon-feather-chevron-up"
              data-inactive-icon="icon-feather-chevron-down"
              data-anime={accordionAnime}
            >
              {faqs.map((faq, index) => {
                const collapseId = `${accordionId}-${index + 1}`;
                const isActive = index === 0;

                return (
                  <div
                    className={`accordion-item ${
                      isActive ? "active-accordion" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className={`accordion-header border-bottom ${
                        index === faqs.length - 1
                          ? "border-color-transparent"
                          : "border-color-medium-gray"
                      }`}
                    >
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isActive ? "true" : "false"}
                        data-bs-parent={`#${accordionId}`}
                      >
                        <div className="accordion-title mb-0 position-relative text-white pe-30px">
                          <i
                            className={`feather ${
                              isActive
                                ? "icon-feather-chevron-up"
                                : "icon-feather-chevron-down"
                            } icon-extra-medium`}
                          ></i>
                          <span className="fw-600 fs-20">
                            {faq.question}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        isActive ? "show" : ""
                      }`}
                      data-bs-parent={`#${accordionId}`}
                    >
                      <div className="accordion-body last-paragraph-no-margin border-bottom border-color-base-color">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
