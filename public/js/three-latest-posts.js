document.addEventListener("DOMContentLoaded", function () {
  fetch('https://evsuae.com/blogs.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const allBlogs = Array.from(xmlDoc.getElementsByTagName("blog"));

      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to midnight

      const blogs = allBlogs
        .map(blog => {
          const publishDateText = blog.getElementsByTagName("publisheddate")[0]?.textContent || "";
          const publishDate = new Date(publishDateText);
          return { blog, publishDate };
        })
        .filter(({ publishDate }) => !isNaN(publishDate) && publishDate <= today)
        .sort((a, b) => b.publishDate - a.publishDate)
        .map(({ blog }) => blog)
        .slice(0, 3); // Only 3 latest blogs

      const container = document.getElementById("blog-container");
      container.innerHTML = "";

      blogs.forEach(blog => {
        const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
        const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
        const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
        const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");
        const author = blog.getElementsByTagName("author")[0]?.textContent || "Anonymous";
        const category = blog.getElementsByTagName("category")[0]?.textContent || "Uncategorized";
        const blurb = blog.getElementsByTagName("blurb")[0]?.textContent || "";

        const blogHTML = `
          <div class="col-lg-4 col-md-6">
            <div class="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
              <div class="blog-image">
                <a href="${blogUrl}" class="d-block">
                  <img loading="lazy" src="${blogImage}&q=70&w=640"
                    srcset="
                      ${blogImage}&q=70&w=320 320w,
                      ${blogImage}&q=70&w=500 500w,
                      ${blogImage}&q=70&w=768 768w
                    " width="367" height="245" alt="${blogTitle}" />
                </a>
                <div class="blog-categories">
                  <a href="${blogUrl}" class="categories-btn bg-white text-dark-gray text-black-hover text-uppercase alt-font fw-700">${category}</a>
                </div>
              </div>
              <div class="card-body p-12">
                <a href="${blogUrl}" class="card-title mb-15px fw-600 fs-17 lh-26 text-dark-gray text-black-hover d-inline-block">${blogTitle}</a>
                <p class="text-dark-gray ">${blurb}</p>
                <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                  <div class="me-auto">
                    <span class="text-dark-gray blog-date fw-500 d-inline-block">${publishDate}</span>
                    <div class="text-dark-gray d-inline-block author-name">By <a href="${blogUrl}" class="text-dark-gray text-black-hover text-decoration-line-bottom fw-600">${author}</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        container.innerHTML += blogHTML;
      });
    })
    .catch(error => {
      console.error("Error fetching or processing XML:", error);
      document.getElementById("loader").textContent = "Failed to load blogs. Please try again later.";
    });

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});
