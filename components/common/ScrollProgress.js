export default function ScrollProgressEn() {
  return (
    <>
      {/* start scroll progress */}
      <div className="scroll-progress d-none d-xxl-block">
        <a href="#" className="scroll-top" aria-label="scroll">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line">
            <span className="scroll-point"></span>
          </span>
        </a>
      </div>
      {/* end scroll progress */}
    </>
  );
}
