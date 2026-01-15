const HeroSection = ({
  backgroundImage,
  tagText,
  subtitleText,
  title,
  description,
  buttonText,
  buttonLink,
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
              {tagText}
            </span>
            <h1 className="d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
              {subtitleText}
            </h1>
          </div>

          <div className="title hero-h1 tp-caption alt-font text-white">
            <h2 className="d-block pb-2">{title}</h2>
            <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
              {description}
            </p>
          </div>

          <a
            href={buttonLink}
            className="btn-hero tp-caption rev-btn alt-font bg-base-color text-dark-gray d-inline-block text-uppercase border-radius-4px rs-hover-ready"
            id="slide-01-layer-06"
            style={{
              visibility: "inherit",
              transition: "none",
              textAlign: "center",
              lineHeight: "12px",
              borderWidth: "0px",
              margin: "0px 12px 8px 0px",
              padding: "19px 23px",
              letterSpacing: "0px",
              fontWeight: 600,
              fontSize: "15px",
              whiteSpace: "normal",
              minHeight: "0px",
              minWidth: "0px",
              maxHeight: "none",
              maxWidth: "none",
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
