const ServiceMainHeroAR = ({
  backgroundImage,
  title,
  description,
  ctaText,
  ctaHref,
}) => {
  return (
    <section
      className="ipad-top-space-margin overflow-hidden p-0 page-title-big-typography service-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-end text-end">
          <div className="col-md-12 page-title-extra-small sm-pt-50px sm-pb-50px">
            <div className="content-box">
              <div className="service-h1 alt-font text-white w-70">
                <h1 className="d-block text-end">{title}</h1>
              </div>

              <div className="desc tp-caption d-block text-end w-70">
                {description}
              </div>

              <div className="header-button d-flex align-items-center gap-3">
                <a
                  href={ctaHref}
                  className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow"
                >
                  <b>{ctaText}</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMainHeroAR;
