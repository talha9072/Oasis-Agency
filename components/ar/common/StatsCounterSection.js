// components/common/StatsCounterSection.js

export default function StatsCounterSection() {
  return (
    <section className="pb-0 pt-0 md-pb-8">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">

          {/* Counter 1 */}
          <div className="col text-center sm-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0">
              الأول
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
              أول مركز للمركبات الكهربائية في الإمارات
            </span>
          </div>

          {/* Counter 2 */}
          <div className="col text-center sm-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              7
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
              فروع
            </span>
          </div>

          {/* Counter 3 */}
          <div className="col text-center xs-mb-35px">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              +200
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
              موظفين ذوي خبرة
            </span>
          </div>

          {/* Counter 4 */}
          <div className="col text-center">
            <span className="alt-font fs-h1 vertical-counter d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
              21452
              <span className="text-highlight position-absolute bottom-10px w-100">
                <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
              </span>
            </span>
            <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
              عملاء راضين
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
