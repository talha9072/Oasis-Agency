document.addEventListener("DOMContentLoaded", function () {
  fetch('/blogs.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const allBlogs = Array.from(xmlDoc.getElementsByTagName("blog"));

      const today = new Date();
      today.setHours(0, 0, 0, 0); // normalize to start of the day

      const blogs = allBlogs
        .map(blog => {
          const publishDateText = blog.getElementsByTagName("publisheddate")[0]?.textContent || "";
          const publishDate = new Date(publishDateText);
          return { blog, publishDate };
        })
        .filter(({ publishDate }) => !isNaN(publishDate) && publishDate <= today)
        .sort((a, b) => b.publishDate - a.publishDate)
        .map(({ blog }) => blog)
        .slice(0, 6); // limit to latest 6

      const container = document.getElementById("side-bar-posts");
      container.innerHTML = "";

      blogs.forEach(blog => {
        const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
        const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
        const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
        const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");

        const blogHTML = `
          <li class="d-flex align-items-center">
            <figure class="me-3 d-flex align-items-center">
              <a href="${blogUrl}">
                <img loading="lazy" src="${blogImage}&q=70&w=320" aria-label="Read more about ${blogTitle}" class="border-radius-6px d-block" alt="${blogTitle}" width="297" height="414"/>
              </a>
            </figure>
            <div class="col media-body">
              <a href="${blogUrl}" class="fw-600 fs-17 text-white d-inline-block mb-10px" aria-label="Read more about ${blogTitle}">${blogTitle}</a>
              <div>
                <a href="${blogUrl}" class="d-inline-block text-light-gray fs-15" aria-label="Read more about ${blogTitle}">${publishDate}</a>
              </div>
            </div>
          </li>
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
