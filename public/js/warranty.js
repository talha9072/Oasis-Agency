(function () {
  const container = document.getElementById("ev-brands-container");
  const letterBar = document.getElementById("ev-letter-bar");
  const loader = document.getElementById("ev-loader");

  // Safety check (very important in Next.js)
  if (!container || !letterBar || !loader) {
    console.warn("Warranty JS: Required elements not found");
    return;
  }

  fetch("/ev-brands.xml")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load XML");
      }
      return response.text();
    })
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const brands = Array.from(xmlDoc.getElementsByTagName("brand"));

      if (!brands.length) {
        throw new Error("No brands found in XML");
      }

      // Sort brands alphabetically
      brands.sort((a, b) =>
        a.getAttribute("name").localeCompare(b.getAttribute("name"))
      );

      // Collect available letters
      const availableLetters = new Set();
      brands.forEach(brand => {
        const name = brand.getAttribute("name");
        if (name) {
          availableLetters.add(name.charAt(0).toUpperCase());
        }
      });

      // Build A–Z letter bar
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm fw-600 px-2 py-1 rounded";
        btn.textContent = letter;
        btn.style.color = "#fff";

        if (availableLetters.has(letter)) {
          btn.style.backgroundColor = "var(--base-color)";
          btn.style.cursor = "pointer";

          btn.addEventListener("click", () => {
            const anchor = document.getElementById(`anchor-${letter}`);
            if (anchor) {
              const offsetTop =
                anchor.getBoundingClientRect().top +
                window.scrollY -
                120;

              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }
          });
        } else {
          btn.style.backgroundColor = "var(--light-gray)";
          btn.style.cursor = "not-allowed";
        }

        letterBar.appendChild(btn);
      });

      // Remove loader
      loader.remove();

      // Build brand columns
      brands.forEach(brand => {
        const brandName = brand.getAttribute("name");
        if (!brandName) return;

        const models = Array.from(brand.getElementsByTagName("model"));
        const firstLetter = brandName.charAt(0).toUpperCase();

        const col = document.createElement("div");
        col.className = "col-md-2 mb-50px";
        col.id = `anchor-${firstLetter}`;

        const title = document.createElement("h3");
        title.className =
          "alt-font fs-20 fw-600 ls-minus-1px text-white mb-15px";
        title.textContent = brandName;
        col.appendChild(title);

        const ul = document.createElement("ul");
        ul.className = "list-unstyled warranty-list";

        models.forEach(model => {
          const modelName = model.getAttribute("name");
          const modelUrl = model.getAttribute("url");

          if (!modelName || !modelUrl) return;

          const li = document.createElement("li");
          const a = document.createElement("a");

          a.href = modelUrl;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.className = "text-white lh-28 fs-16";
          a.innerHTML = `
            <i class="bi bi-check-circle text-base-color"></i>
            ${modelName}
          `;

          li.appendChild(a);
          ul.appendChild(li);
        });

        col.appendChild(ul);
        container.appendChild(col);
      });
    })
    .catch(error => {
      console.error("Error loading EV brands:", error);
      loader.textContent =
        "Failed to load EV brands. Please try again later.";
    });
})();
