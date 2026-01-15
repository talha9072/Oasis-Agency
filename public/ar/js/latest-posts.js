document.addEventListener("DOMContentLoaded", function () {
  fetch('https://evsuae.com/blogs-ar.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      const blogs = Array.from(xmlDoc.getElementsByTagName("blog"));

      blogs.sort((a, b) => {
        const dateA = new Date(a.getElementsByTagName("publisheddate")[0]?.textContent || 0);
        const dateB = new Date(b.getElementsByTagName("publisheddate")[0]?.textContent || 0);
        return dateB - dateA;
      });

      const latestBlogs = blogs.slice(0, 4); // Only the latest 3

      const container = document.getElementById("blog-container");
      container.innerHTML = "";

      latestBlogs.forEach(blog => {
        const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
        const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
        const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
        const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");

        const blogHTML = `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-30px">
              <figure class="position-relative mb-0 box-hover">
                <div class="blog-image">
                  <img loading="lazy" src="${blogImage}&q=70&w=640"
                    srcset="
                      ${blogImage}&q=70&w=320 320w,
                      ${blogImage}&q=70&w=500 500w,
                      ${blogImage}&q=70&w=768 768w
                    " alt="${blogTitle}" width="297" height="414" />
                  <span class="box-overlay"></span>
                  <span class="bg-gradient-gray-light-dark-transparent position-absolute opacity-6 top-0px left-0px w-100 h-100"></span>
                </div>
                <figcaption class="d-flex flex-column h-100">
                  <div class="my-auto w-100 text-center blog-hover-icon"><a href="${blogUrl}" aria-label="${blogTitle}" class="d-inline-block"><i class="line-icon-Arrow-OutRight icon-extra-large text-white"></i></a></div>
                  <div class="position-relative post-content p-14 text-center last-paragraph-no-margin">
                    <div class="position-relative z-index-2 overflow-hidden">
                      <a href="${blogUrl}" aria-label="${blogTitle}" class="d-inline-block fs-15 text-base-color mb-20px urbanist text-uppercase fw-600">${publishDate}</a>
                      <a href="${blogUrl}" aria-label="${blogTitle}" class="card-title fs-20 alt-font fw-500 text-white mb-0 d-block">${blogTitle}</a>
                      <div class="hover-text"><a href="${blogUrl}" class="btn btn-link-gradient btn-medium text-white thin mt-20px mb-5px opacity-6 fw-300">متابعة القراءة<span class="bg-white"></span></a></div>
                    </div>
                    <div class="box-overlay"></div>
                  </div>
                </figcaption>
              </figure>
            </div>
        `;

        container.innerHTML += blogHTML;
      });
    })
    .catch(error => {
      console.error("Error fetching or processing XML:", error);
      document.getElementById("loader").textContent = "ما قدرنا نحمّل المقالات. حاول مرة ثانية بعدين.";
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
