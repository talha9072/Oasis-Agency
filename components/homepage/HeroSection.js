export default function HeroSection() {
  return (
    <section id="hero-section" className="snap-section">
      {/* Desktop Video */}
      <video
        playsInline
        autoPlay
        muted
        loop
        className="hero-img"
        src="https://res.cloudinary.com/diztjzpz6/video/upload/f_auto,q_auto,vc_auto,w_1280/v1745834926/hero-test-3_aqdz2m.mp4"
      />

      {/* Mobile Video */}
      <video
        playsInline
        autoPlay
        muted
        loop
        className="hero-img d-block d-md-none"
        src="https://res.cloudinary.com/diztjzpz6/video/upload/f_auto,q_auto,vc_auto,w_720/v1747894600/hero-video_vd9lgt.mp4"
      />

      <div className="container">
        <div className="content-box">
          <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mt-3">
            <span className="hero-tag bg-dark-gray alt-font d-inline me-10px border-radius-3px fs-12 text-white fw-500">
              EVS
            </span>
            <h1 className="d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
              Electric Vehicle (EV) Service Center in UAE
            </h1>
          </div>

          <div className="title hero-h1 tp-caption alt-font text-white">
            <h2 className="d-block pb-2 text-uppercase">EV service redefined.</h2>
            <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
              Performance, trust, and total care.
            </p>
          </div>

          <a
            href="https://evsuae.com/contact"
            className="btn-hero tp-caption rev-btn alt-font bg-base-color text-dark-gray d-inline-block text-uppercase border-radius-4px rs-hover-ready"
            style={{
              visibility: 'inherit',
              transition: 'none',
              textAlign: 'center',
              lineHeight: '12px',
              borderWidth: '0px',
              margin: '0px 12px 8px 0px',
              padding: '19px 23px',
              letterSpacing: '0px',
              fontWeight: 600,
              fontSize: '15px',
              whiteSpace: 'normal',
              minHeight: '0px',
              minWidth: '0px',
              maxHeight: 'none',
              maxWidth: 'none',
              filter: 'blur(0px)',
            }}
          >
            Book Your EV Check
          </a>
        </div>
      </div>
    </section>
  );
}