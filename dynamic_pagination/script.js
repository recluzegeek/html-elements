document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const paginationContentWrapper = document.querySelector(".pagination-content-wrapper");
  const pagination = document.querySelector(".pagination");
  let currentPage = 1;
  let itemsPerPage = 7;

  // Define the data array and populate it with initial items
  let data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

  // Function to display items for a specific page
  function displayPage(page) {
    paginationContentWrapper.innerHTML = "";
    const endIndex = Math.max(data.length - (page - 1) * itemsPerPage, 0);
    const startIndex = Math.max(endIndex - itemsPerPage, 0);

    for (let i = endIndex - 1; i >= startIndex; i--) {
      const newDiv = document.createElement("div");
      newDiv.textContent = data[i];
      newDiv.classList.add("pagination-content");
      paginationContentWrapper.appendChild(newDiv);
    }
  }

  // Function to update pagination links
  function updatePagination() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    pagination.innerHTML = "";

    // Add previous page link
    const prevPageItem = document.createElement("a");
    prevPageItem.href = "#";
    prevPageItem.textContent = "«";
    prevPageItem.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
      }
    });
    pagination.appendChild(prevPageItem);

    // Add page number links
    for (let i = 1; i <= totalPages; i++) {
      const paginationItem = document.createElement("a");
      paginationItem.href = "#";
      paginationItem.textContent = i;
      if (i === currentPage) {
        paginationItem.classList.add("active");
      }
      paginationItem.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = parseInt(event.target.textContent);
        displayPage(currentPage);
        updatePagination();
      });
      pagination.appendChild(paginationItem);
    }

    // Add next page link
    const nextPageItem = document.createElement("a");
    nextPageItem.href = "#";
    nextPageItem.textContent = "»";
    nextPageItem.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
      }
    });
    pagination.appendChild(nextPageItem);
  }

  // Event listener for Load More button
  loadMoreBtn.addEventListener("click", function () {
    // Add a new item to the data array
    data.push("Item " + (data.length + 1));

    // Set the current page to the first page
    currentPage = 1;

    displayPage(currentPage);
    updatePagination();
  });

  // Initial load
  displayPage(currentPage);
  updatePagination();
});
