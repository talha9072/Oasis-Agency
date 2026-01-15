const HeroSectionAr = ({
  backgroundImage,
  brandLabel,
  subtitle,
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      id="hero-section"
      className="snap-section"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="content-box">
          <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mt-3">
            <span className="hero-tag bg-dark-gray alt-font d-inline me-10px border-radius-3px fs-12 text-white fw-500">
              {brandLabel}
            </span>
            <h1 className="d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
              {subtitle}
            </h1>
          </div>

          <div className="title hero-h1 tp-caption alt-font text-white">
            <h2 className="d-block pb-2">{title}</h2>
            <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
              {description}
            </p>
          </div>

          <a
            href={ctaLink}
            className="btn-hero tp-caption rev-btn alt-font bg-base-color text-dark-gray d-inline-block text-uppercase border-radius-4px rs-hover-ready"
            aria-label={ctaText}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAr;
