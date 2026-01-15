// components/common/StatsCounterSection.js
import { useEffect } from "react";

export default function StatsCounterSection() {
  // Template ke JS ko reinitialize karne ke liye (vertical-counter animation ke liye)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("load"));
    }
  }, []);

  return (
    <section className="pb-0 pt-0 md-pb-8">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">
          {/* #1 EV Center */}
          <div className="col text-center sm-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0">
              #1
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
              1st EV Center in the UAE
            </span>
          </div>

          {/* Branches */}
          <div className="col text-center sm-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              7
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
              Branches
            </span>
          </div>

          {/* Experienced Staff */}
          <div className="col text-center xs-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              +200
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
              Experienced Staff
            </span>
          </div>

          {/* Happy Customers */}
          <div className="col text-center">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              21452
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
              Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}