export default function CounterStats() {
  const counters = [
    {
      value: "الأول",
      label: "أول مركز للمركبات الكهربائية في الإمارات",
      isUrbanist: false,
    },
    {
      value: "7",
      label: "فروع",
      isUrbanist: true,
    },
    {
      value: "+200",
      label: "موظفين ذوي خبرة",
      isUrbanist: true,
    },
    {
      value: "21452",
      label: "عملاء راضين",
      isUrbanist: true,
    },
  ];

  return (
    <section className="half-section">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">
          {counters.map((item, index) => (
            <div
              className={`col text-center ${
                index < 3 ? "sm-mb-35px" : ""
              } ${index === 2 ? "xs-mb-35px" : ""}`}
              key={index}
            >
              <span
                className={`alt-font fs-h1 vertical-counter d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative ${
                  item.isUrbanist ? "urbanist" : ""
                }`}
              >
                {item.value}
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </span>

              <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
