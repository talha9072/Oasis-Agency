// public/legacy/js/converter.js

(function () {
  document.addEventListener("click", function (e) {
    const englishBtn = e.target.closest(".english-converter");
    const arabicBtn = e.target.closest(".arabic-converter");

    // ENGLISH CLICK
    if (englishBtn) {
      e.preventDefault();

      const url = new URL(window.location.href);
      const parts = url.pathname.split("/").filter(Boolean);

      if (parts[0] === "ar") {
        parts.shift();
        url.pathname = "/" + parts.join("/");
        if (url.pathname === "/") url.pathname = "/";
        window.location.href = url.toString();
      }
    }

    // ARABIC CLICK
    if (arabicBtn) {
      e.preventDefault();

      const url = new URL(window.location.href);
      const parts = url.pathname.split("/").filter(Boolean);

      if (parts[0] !== "ar") {
        parts.unshift("ar");
        url.pathname = "/" + parts.join("/");
        window.location.href = url.toString();
      }
    }
  });
})();
