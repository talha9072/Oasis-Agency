"use client";

export default function FullHeroAr({
  sectionId = "full-hero",
  sectionClass =
    "overflow-hidden tesla-section d-flex align-items-center dark-overlay",

  backgroundImage,
  minHeight = "100vh",

  // 👇 FULL TITLE PARTS (NO HARD CODING)
  titlePrefix,     // مثال: "مركز خدمة"
  titleHighlight,  // مثال: "روكس"
  titleSuffix,     // مثال: "للمركبات الكهربائية المتخصص"

  description,

  ctaText,
  ctaLink,
  ctaAriaLabel,
}) {
  return (
    <section
      id={sectionId}
      className={sectionClass}
      dir="rtl"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: minHeight,
      }}
    >
      <div className="container z-index-1">
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <div className="title alt-font text-white mt-3">
              <h1 className="d-block pb-2 text-end">
                {titlePrefix} <span>{titleHighlight}</span> {titleSuffix}
              </h1>
            </div>

            <div className="desc d-inline-block hero-desc text-end">
              {description}
            </div>

            <a
              href={ctaLink}
              className="btn-hero rev-btn alt-font bg-base-color text-dark-gray text-uppercase border-radius-4px rs-hover-ready hero-cta-button mt-4 w-auto d-inline-block"
              aria-label={ctaAriaLabel}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
