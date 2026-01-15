const ServiceBenefits = ({
  title,
  items = [],
  iconClass = "fa fa-check-circle",
}) => {
  return (
    <section className="big-section service-list pb-0 pt-4">
      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center mb-3">
          <div className="col-XL-7 col-lg-8 text-center">
            <h2 className="text-white alt-font fw-700 ls-minus-1px">
              {title}
            </h2>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="col icon-with-text-style-01 mb-50px sm-mb-40px"
            >
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-icon">
                  <i
                    className={`${iconClass} icon-large text-base-color`}
                  ></i>
                </div>
                <div className="feature-box-content">
                  <h3 className="d-inline-block alt-font text-white fw-600 mb-5px">
                    {item.title}
                  </h3>
                  <p className="fs-14 w-80 xl-w-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
