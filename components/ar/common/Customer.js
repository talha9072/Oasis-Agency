export default function Customer() {
  const reviews = [
    {
      name: "مريم ع",
      text: "كانت تجربتي في زيارتي السابقة لكراج إي في إس رائعة. الفريق كان متعاون ومنتبه، وتأكدوا إن كل شيء يمشي زي ما طلبت. النتيجة كانت أكثر من مثالية. أنصح بشدة بإي في إس لأي حد يحتاج خدمات ودعم لسيارته الكهربائية.",
    },
    {
      name: "كيش مالي",
      text: "عملية منظمة جدًا. ورشة كبيرة ونظيفة ومضيئة. زحمة بس كل شيء يمشي بسلاسة. يخدمون كل أنواع السيارات الكهربائية (بعضها ما كنت أعرف إنها موجودة في الإمارات أصلًا). ما أقدر أوصي بهم أكثر من الورش الثانية.",
    },
    {
      name: "باتريك ب",
      text: "إي في إس قدموا خدمة ممتازة لسيارتي الهجينة سيينا. كانوا على تواصل مستمر وحلوا مشكلة السيارة بسرعة وصح من أول مرة. أنصح بهم بشدة.",
    },
    {
      name: "سامي علي",
      text: "محترفين في كل شيء، ترحيب حلو وصادقين في توضيح المشكلة الحقيقية للسيارة والصيانة المطلوبة. صلحوا سيارتي زين وسعيد إني زرتهم. شكرًا جزيلًا لفريق إي في إس.",
    },
  ];

  return (
    <section className="pt-0 pb-5 md-pb-8 overlap-height overflow-hidden">
      <div className="container overlap-gap-section">
        <div
          className="row align-items-center justify-content-center"
          data-anime='{ "el": "childs", "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
        >
          {/* LEFT */}
          <div className="col-xl-5 col-lg-7 col-md-10 position-relative pe-xl-0 text-center text-xl-end lg-mb-10px">
            <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
              آراء العملاء
            </span>

            <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-10px w-80 lg-w-100">
              ماذا يقول الناس عن خدماتنا
              <span className="text-base-color">.</span>
            </h2>

            <div className="d-block mb-25px">
              شاهد أكثر من{" "}
              <span className="urbanist" dir="ltr">600</span>{" "}
              تقييم على{" "}
              <a
                href="https://g.co/kgs/GZasVRR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="عرض على خرائط جوجل (يفتح في نافذة جديدة)"
              >
                جوجل
              </a>
            </div>

            <div className="d-flex justify-content-center justify-content-xl-start gap-2">
              <div
                className="slider-one-slide-next-1 text-white swiper-button-next slider-navigation-style-04 border border-1 border-color-medium-gray"
                tabIndex={0}
                role="button"
                aria-label="الشريحة التالية"
              >
                <i className="bi bi-arrow-right-short icon-very-medium"></i>
              </div>

              <div
                className="slider-one-slide-prev-1 text-white swiper-button-prev slider-navigation-style-04 border border-1 border-color-medium-gray"
                tabIndex={0}
                role="button"
                aria-label="الشريحة السابقة"
              >
                <i className="bi bi-arrow-left-short icon-very-medium"></i>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-xl-7 col-lg-10 overflow-hidden">
            <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
              <div
                className="swiper slider-one-slide slider-shadow-right sm-slider-shadow-none magic-cursor overflow-visible ps-25px sm-p-0"
                data-slider-options='{ "slidesPerView": 1, "spaceBetween": 35, "loop": true, "pagination": { "el": ".slider-one-slide-pagination", "clickable": true, "dynamicBullets": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 6000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 2 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
              >
                <div className="swiper-wrapper pt-30px pb-30px">
                  {reviews.map((review, index) => (
                    <div className="swiper-slide review-style-06" key={index}>
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px ms-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="خدمات المركبات الكهربائية إي في إس"
                          />

                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">
                              {review.name}
                            </div>
                            <p className="lh-22 d-block">عميل موثق</p>
                          </div>

                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-500 text-white d-inline-block align-middle me-auto md-position-absolute md-right-15px md-top-15px urbanist">
                            <i className="fa-solid fa-star me-5px"></i>5.0
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
