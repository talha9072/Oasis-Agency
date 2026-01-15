// Fetch and process the XML file to display the 3 latest blogs
document.addEventListener("DOMContentLoaded", function () {
  fetch('https://evsuae.com/blogs-ar.xml') // Replace with your actual XML URL
    .then(response => response.text())
    .then(xmlString => {
      // Parse the XML string into a DOM object
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      // Get all <blog> elements
      const blogs = Array.from(xmlDoc.getElementsByTagName("blog"));

      // Sort blogs by publish date (latest first)
      blogs.sort((a, b) => {
        const dateA = new Date(a.getElementsByTagName("publisheddate")[0]?.textContent || 0);
        const dateB = new Date(b.getElementsByTagName("publisheddate")[0]?.textContent || 0);
        return dateB - dateA; // Descending order
      });

      // Select the container and clear any previous content
      const container = document.getElementById("blog-container");
      container.innerHTML = "";

      // Limit to 3 latest blogs
      blogs.slice(0, 3).forEach(blog => {
        const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
        const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
        const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
        const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");
        const author = blog.getElementsByTagName("author")[0]?.textContent || "Anonymous";
        const category = blog.getElementsByTagName("category")[0]?.textContent || "Uncategorized";
        const blurb = blog.getElementsByTagName("blurb")[0]?.textContent || "";

        // Create a blog HTML structure
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
                    <span class="text-dark-gray blog-date fw-500 urbanist d-inline-block">${publishDate}</span>
                    <div class="text-dark-gray d-inline-block author-name">By <a href="${blogUrl}" class="text-dark-gray text-black-hover text-decoration-line-bottom fw-600">${author}</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        // Append the blog to the container
        container.innerHTML += blogHTML;
      });
    })
    .catch(error => {
      console.error("Error fetching or processing XML:", error);
      document.getElementById("loader").textContent = "ما قدرنا نحمّل المقالات. حاول مرة ثانية بعدين.";
    });

  // Format the date to DD/MM/YYYY
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // Return the original string if it's not a valid date
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});
