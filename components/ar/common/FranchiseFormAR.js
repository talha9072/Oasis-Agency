import { useState } from "react";

export default function FranchiseFormAR() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/__netlify-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) throw new Error("Failed");

      // ✅ FULL reload Arabic thank-you
      window.location.href = "/ar/thank-you";
    } catch (err) {
      alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      setLoading(false);
    }
  };

  return (
    <section className="position-relative pt-100px mb-50px" dir="rtl">
      <div className="container">
        <form
          name="franchise"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="row contact-form-style-02"
        >
          <input type="hidden" name="form-name" value="franchise" />

          {/* Honeypot */}
          <p hidden>
            <label>
              لا تملأ هذا الحقل:
              <input name="bot-field" />
            </label>
          </p>

          <div className="col-md-6 mb-30px">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="اسمك*"
              required
            />
          </div>

          <div className="col-md-6 mb-30px">
            <input
              className="form-control text-end"
              type="tel"
              name="phone"
              placeholder="رقم هاتفك*"
              required
            />
          </div>

          <div className="col-md-6 mb-30px">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني*"
              required
            />
          </div>

          <div className="col-md-6 mb-30px">
            <input
              className="form-control"
              type="text"
              name="subject"
              placeholder="الموضوع"
            />
          </div>

          <div className="col-md-12 mb-30px">
            <textarea
              className="form-control"
              rows="4"
              name="comment"
              placeholder="رسالتك"
            />
          </div>

          <div className="col-xl-5 col-md-4 text-center text-md-start">
            <button
              type="submit"
              className="btn btn-medium btn-round-edge btn-dark-gray"
              disabled={loading}
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
              <span className="bg-white"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
