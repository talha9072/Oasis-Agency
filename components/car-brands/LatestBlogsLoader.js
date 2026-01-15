"use client";

import { useEffect } from "react";

export default function LatestBlogsLoader() {
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch("/blogs.xml");
        const xmlString = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        const allBlogs = Array.from(xmlDoc.getElementsByTagName("blog"));

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const blogs = allBlogs
          .map(blog => {
            const publishDateText =
              blog.getElementsByTagName("publisheddate")[0]?.textContent || "";
            const publishDate = new Date(publishDateText);
            return { blog, publishDate };
          })
          .filter(({ publishDate }) => !isNaN(publishDate) && publishDate <= today)
          .sort((a, b) => b.publishDate - a.publishDate)
          .map(({ blog }) => blog)
          .slice(0, 4);

        const container = document.getElementById("blog-container");
        const loader = document.getElementById("loader");

        if (!container) return;

        container.innerHTML = "";
        if (loader) loader.style.display = "none";

        blogs.forEach(blog => {
          const blogTitle =
            blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
          const blogUrl =
            blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
          const blogImage =
            blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
          const publishDate = formatDate(
            blog.getElementsByTagName("publisheddate")[0]?.textContent || ""
          );

          const blogHTML = `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-30px">
              <figure class="position-relative mb-0 box-hover">
                <div class="blog-image">
                  <img loading="lazy" src="${blogImage}&q=70&w=640"
                    srcset="
                      ${blogImage}&q=70&w=320 320w,
                      ${blogImage}&q=70&w=500 500w,
                      ${blogImage}&q=70&w=768 768w
                    "
                    alt="${blogTitle}"
                    width="297"
                    height="414"
                  />
                  <span class="box-overlay"></span>
                  <span class="bg-gradient-gray-light-dark-transparent position-absolute opacity-6 top-0px left-0px w-100 h-100"></span>
                </div>

                <figcaption class="d-flex flex-column h-100">
                  <div class="my-auto w-100 text-center blog-hover-icon">
                    <a href="${blogUrl}" aria-label="${blogTitle}">
                      <i class="line-icon-Arrow-OutRight icon-extra-large text-white"></i>
                    </a>
                  </div>

                  <div class="position-relative post-content p-14 text-center last-paragraph-no-margin">
                    <div class="position-relative z-index-2 overflow-hidden">
                      <a href="${blogUrl}" class="fs-15 text-base-color mb-20px text-uppercase fw-600 d-inline-block">
                        ${publishDate}
                      </a>
                      <a href="${blogUrl}" class="card-title fs-20 alt-font fw-500 text-white mb-0 d-block">
                        ${blogTitle}
                      </a>
                      <div class="hover-text">
                        <a href="${blogUrl}" class="btn btn-link-gradient btn-medium text-white thin mt-20px mb-5px opacity-6 fw-300">
                          Continue reading<span class="bg-white"></span>
                        </a>
                      </div>
                    </div>
                    <div class="box-overlay"></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          `;

          container.insertAdjacentHTML("beforeend", blogHTML);
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);
        const loader = document.getElementById("loader");
        if (loader) loader.textContent = "Failed to load blogs.";
      }
    };

    loadBlogs();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  }

  return null;
}
