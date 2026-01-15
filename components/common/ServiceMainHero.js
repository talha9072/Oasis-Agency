// ServiceMainHero.jsx
export default function ServiceMainHero({
  title,
  description,
  buttonText,
  buttonLink,
  textAlign = "start",
  backgroundImage,
}) {
  return (
    <section
      className="ipad-top-space-margin overflow-hidden p-0 page-title-big-typography service-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">
        <div
          className={`row justify-content-center align-items-end text-${textAlign}`}
        >
          <div className="col-md-12 page-title-extra-small sm-pt-50px sm-pb-50px">
            <div className="content-box">
              <div className="service-h1 alt-font text-white w-70">
                <h1 className={`d-block text-${textAlign}`}>{title}</h1>
              </div>

              <div
                className={`desc tp-caption d-inline-block text-${textAlign} w-70`}
              >
                {description}
              </div>

              <div className="header-button d-flex align-items-center gap-3">
                <a
                  href={buttonLink}
                  className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow"
                >
                  <b>{buttonText}</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
