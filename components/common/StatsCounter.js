import React from "react";

export default function StatsCounterSection() {
  return (
    <section className="half-section">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`col text-center ${
                index < stats.length - 1 ? "sm-mb-35px" : ""
              }`}
            >
              <h1
                className="alt-font vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0"
                data-to={item.value}
              >
                {item.prefix}
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
                {item.suffix}
              </h1>

              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================
   STATS DATA
================================ */
const stats = [
  {
    value: 1,
    prefix: "#",
    suffix: "",
    label: "1st EV Center in the UAE",
  },
  {
    value: 7,
    prefix: "",
    suffix: "",
    label: "Branches",
  },
  {
    value: 200,
    prefix: "+",
    suffix: "",
    label: "Experienced Staff",
  },
  {
    value: 21452,
    prefix: "",
    suffix: "",
    label: "Happy Customers",
  },
];
