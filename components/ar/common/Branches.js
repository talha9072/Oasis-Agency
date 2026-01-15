export default function Branches() {
  const branches = [
    {
      id: "tab_nine3",
      index: "01.",
      city: "أبوظبي",
      area: "مصفح",
      title: "إي في إس أبوظبي",
      address: (
        <>
          الشارع <span className="urbanist">6</span> - مصفح - م
          <span className="urbanist">14</span> - أبوظبي
        </>
      ),
      map: "https://maps.app.goo.gl/8yhst7aDcJW8mWs59",
      phone: "tel:+971547133313",
      image: "/img/abu-dhabi.png",
      number: "01.",
      active: true,
    },
    {
      id: "tab_nine1",
      index: "02.",
      city: "دبي",
      area: "المدينة العالمية",
      title: "إي في إس دبي",
      address: "المدينة العالمية 1 - التجمع الإماراتي، مستودع رقم 39",
      map: "https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA",
      phone: "tel:+9710566017771",
      image: "/img/dubai.png",
      number: "02.",
    },
    {
      id: "tab_nine2",
      index: "03.",
      city: "عجمان",
      area: "الجرف 2",
      title: "إي في إس عجمان",
      address: "الجرف 2 - عجمان",
      map: "https://maps.app.goo.gl/etWuGuKCFgaQ21ta8",
      phone: "tel:+9710564556555",
      image: "/img/ajman.png",
      number: "03.",
    },
    {
      id: "tab_nine4",
      index: "04.",
      city: "العين",
      area: "المنطقة الصناعية",
      title: "إي في إس العين",
      address: "شارع البيوار 5 - المنطقة الصناعية - العجايز",
      map: "https://maps.app.goo.gl/wUXqKuLDtkWffKPf6",
      phone: "tel:+9710507770360",
      image: "/img/EVS-alain.jpg",
      number: "04.",
    },
    {
      id: "tab_nine5",
      index: "05.",
      city: "الرياض",
      area: "القيروان",
      title: "إي في إس الرياض",
      address: "القيروان، الرياض، المملكة العربية السعودية",
      map: "https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89",
      phone: "tel:+966554586777",
      image: "/img/riyadh.jpeg",
      number: "05.",
    },
    {
      id: "tab_nine6",
      index: "06.",
      city: "الشارقة",
      area: "السجع",
      title: "إي في إس الشارقة",
      address: "السجع، الشارقة، الإمارات العربية المتحدة",
      map: "https://maps.app.goo.gl/nrLKQJuTK27B7K2i7",
      phone: "tel:+971569863920",
      image: "/img/sharjah.png",
      number: "06.",
    },
  ];

  return (
    <section className="z-index-0 position-relative overflow-hidden pb-0 md-pb-5">
      <img
        src="https://evsuae.com/.netlify/images?url=/images/home-17.png"
        loading="lazy"
        className="h-190px z-index-minus-1 position-absolute left-0px top-0px lg-h-120px d-none d-md-inline-block"
        data-bottom-top="transform: translate3d(80px, 0px, 0px);"
        data-top-bottom="transform: translate3d(-150px, 0px, 0px);"
        alt="خدمات المركبات الكهربائية إي في إس"
      />

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT NAV */}
          <div className="col-xl-4 offset-xl-1 col-lg-5 team-style-09 order-1 pb-5 pb-md-0">
            <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-15px text-uppercase">
              فروعنا<span className="text-base-color">.</span>
            </h2>

            <ul className="nav nav-tabs alt-font flex-column border-0 justify-content-center p-0">
              {branches.map((b, i) => (
                <li className="nav-item" key={b.id}>
                  <a
                    className={`nav-link ${b.active ? "active" : ""}`}
                    data-bs-toggle="tab"
                    href={`#${b.id}`}
                  >
                    <span className="number text-light-gray fs-22 me-5px urbanist">
                      {b.index}
                    </span>
                    <span className="name fs-22 text-white">{b.city}</span>
                    <span className="text-medium-gray me-auto">{b.area}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7 md-mb-35px order-2">
            <div className="tab-content bg-white box-shadow-extra-large">
              {branches.map((b) => (
                <div
                  key={b.id}
                  className={`tab-pane fade in ${
                    b.active ? "active show" : ""
                  }`}
                  id={b.id}
                >
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">
                        {b.title}
                      </h3>
                      <span className="fs-16 fw-500 text-base-color">
                        {b.address}
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-500 fs-20 text-white alt-font">
                          <a href={b.map} target="_blank" rel="noreferrer">
                            <i className="fa fa-directions text-base-color mx-2"></i>
                            الحصول على الاتجاهات
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-500 fs-20 text-light-gray alt-font">
                          <a href={b.phone}>
                            <i className="fa fa-phone text-base-color mx-2"></i>
                            اتصل بنا
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-500 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>
                            تابعنا
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: `url('https://evsuae.com/.netlify/images?url=${b.image}&w=1024')`,
                      }}
                    >
                      <span className="fs-190 fw-500 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        {b.number}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
