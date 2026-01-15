import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__netlify-contact-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) throw new Error("Failed");

      // ✅ FULL PAGE REDIRECT
      window.location.href = "/thank-you";
    } catch (err) {
      alert("Submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="row contact-form-style-02"
    >
      {/* REQUIRED */}
      <input type="hidden" name="form-name" value="contact-form" />

      {/* Honeypot */}
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Your name*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="tel"
          name="phone"
          placeholder="Your phone*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Your email address*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <select className="form-control" name="location" required>
          <option value="">Select EVS Location*</option>
          <option value="EVS Dubai">EVS Dubai</option>
          <option value="EVS Abu Dhabi">EVS Abu Dhabi</option>
          <option value="EVS Ajman">EVS Ajman</option>
          <option value="EVS Alain">EVS Alain</option>
          <option value="EVS Sharjah">EVS Sharjah</option>
        </select>
      </div>

      <div className="col-md-12 mb-30px">
        <textarea
          className="form-control"
          name="comment"
          placeholder="Your message"
        />
      </div>

      <div className="col-xl-5 col-md-4 sm-mt-25px">
        <button
          type="submit"
          className="btn btn-medium btn-round-edge btn-dark-gray btn-slide-right"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
          <span className="bg-base-color"></span>
        </button>
      </div>
    </form>
  );
}
