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
      const container = document.getElementById("side-bar-posts");
      container.innerHTML = "";

      // Limit to 3 latest blogs
      blogs.slice(0, 6).forEach(blog => {
        const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
        const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
        const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
        const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");
        const author = blog.getElementsByTagName("author")[0]?.textContent || "Anonymous";
        const category = blog.getElementsByTagName("category")[0]?.textContent || "Uncategorized";
        const blurb = blog.getElementsByTagName("blurb")[0]?.textContent || "";

        // Create a blog HTML structure
        const blogHTML = `
                                <li class="d-flex align-items-center">
                                    <figure class="me-3 d-flex align-items-center">
                                         <a href="${blogUrl}"><img loading="lazy" src="${blogImage}&q=70&w=320" aria-label="Read more about ${blogTitle}" class="border-radius-6px d-block" alt="${blogTitle}" width="297" height="414"/></a>
                                    </figure>
                                    <div class="col media-body pr-5">
                                        <a href="${blogUrl}" class="fw-600 fs-12 text-white d-inline-block mb-10px" aria-label="Read more about ${blogTitle}">${blogTitle}</a>
                                        <div><a href="${blogUrl}" class="d-inline-block text-light-gray urbanist fs-15" aria-label="Read more about ${blogTitle}">${publishDate}</a></div>
                                    </div>
                                </li>
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
