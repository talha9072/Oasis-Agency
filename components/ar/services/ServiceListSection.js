const ServiceListSection = ({ title, services }) => {
  return (
    <section className="big-section service-list pb-0 pt-4">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-XL-7 col-lg-8 text-center">
            <h2 className="text-white alt-font fw-500 ls-minus-1px">
              {title}
            </h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
          {services.map((service, index) => (
            <a href={service.href} key={index}>
              <div className="col icon-with-text-style-01 mb-50px sm-mb-40px">
                <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                  <div className="feature-box-icon">
                    <i className="fa fa-check-circle icon-large text-base-color"></i>
                  </div>
                  <div className="feature-box-content">
                    <h3 className="d-inline-block alt-font text-white fw-600 mb-5px">
                      {service.title}
                    </h3>
                    <p className="fs-14 w-80 xl-w-90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListSection;
