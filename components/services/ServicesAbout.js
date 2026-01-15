const ServicesAbout = ({
  image,
  imageSrcSet,
  imageSizes,
  imageAlt,
  iconClass = "bi bi-shield-fill-plus",
  badgeText,
  title,
  highlight = ".",
  description,
}) => {
  return (
    <section className="snap-section position-relative pb-0">
      <div className="container">
        <div className="row align-items-center">
          {/* Image column */}
          <div className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-end position-relative">
            <img
              className="w-100"
              src={image}
              srcSet={imageSrcSet}
              sizes={imageSizes}
              alt={imageAlt}
            />

            {/* Icon overlay */}
            <i
              className={`${iconClass} text-base-color fs-100 position-absolute right-minus-20px top-100px lg-top-60px md-right-100px sm-right-20px xs-right-0px`}
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
            ></i>
          </div>

          {/* Content column */}
          <div className="col-lg-6 col-xxl-4 col-xl-5 offset-xl-1 order-1 order-lg-2 md-mb-50px sm-mb-30px">
            <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-30px">
              {badgeText}
            </span>

            <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
              {title}
              <span className="text-base-color">{highlight}</span>
            </h2>

            <p
              className="mb-30px"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;
