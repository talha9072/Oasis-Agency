export default function ScrollProgress() {
  return (
    <>
      {/* start scroll progress */}
      <div className="scroll-progress d-none d-xxl-block">
        <a href="#" className="scroll-top" aria-label="التمرير">
          <span className="scroll-text">التمرير</span>
          <span className="scroll-line">
            <span className="scroll-point"></span>
          </span>
        </a>
      </div>
      {/* end scroll progress */}
    </>
  );
}
