import { useState } from "react";

export default function FranchiseForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__netlify-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) throw new Error("Failed");

      // ✅ PROPER REDIRECT (FULL PAGE RELOAD)
      window.location.href = "/thank-you";
    } catch (err) {
      alert("Submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
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
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="text"
          name="name"
          placeholder="Your name*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="tel"
          name="phone"
          placeholder="Your phone*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="email"
          name="email"
          placeholder="Your email address*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="text"
          name="subject"
          placeholder="Your subject"
        />
      </div>

      <div className="col-md-12 mb-30px">
        <textarea
          className="form-control"
          rows="4"
          name="comment"
          placeholder="Your message"
        />
      </div>

      <div className="col-xl-7 col-md-8 pb-30px">
        <p className="fs-15 lh-26">
          We respect your privacy. Your information will never be shared.
        </p>
      </div>

      {/* 🔒 BUTTON ALIGNMENT SAME AS BEFORE */}
      <div className="col-xl-5 col-md-4 text-center text-md-end sm-mt-25px">
        <button
          type="submit"
          className="btn btn-medium btn-round-edge btn-dark-gray"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
          <span className="bg-white"></span>
        </button>
      </div>
    </form>
  );
}
