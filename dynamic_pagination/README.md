# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Dynamic Pagination Code Explanation](#dynamic-pagination-code-explanation)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Project Description

The project demonstrates the implementation of dynamic pagination in a web page. The page displays a list of items that are paginated dynamically. The user can navigate through different pages using the pagination links at the bottom of the page. There is also a "Load More Data" button that adds more items to the list and updates the pagination accordingly.

## Dynamic Pagination Code Explanation

The dynamic pagination code is written in JavaScript and is used to manage the pagination of a list of items on a web page. Here's a brief explanation of how it works:

1. **Initialization**: When the document is loaded, the script gets references to the "Load More Data" button, the content wrapper, and the pagination element. It also initializes the current page and items per page variables.

2. **Displaying a Page**: The `displayPage` function is responsible for displaying the items for a specific page. It calculates the start and end indices for the items to be displayed based on the current page and items per page. It then creates a new div for each item and appends it to the content wrapper.

3. **Updating Pagination Links**: The `updatePagination` function updates the pagination links based on the total number of pages. It creates a link for each page and adds an event listener to it that updates the current page and displays the new page when clicked. It also creates links for the previous and next pages.

4. **Loading More Data**: The "Load More Data" button's click event listener adds a new item to the data array, resets the current page to the first page, and updates the displayed page and pagination links.

5. **Initial Load**: On the initial load, the script displays the first page and updates the pagination links.

This dynamic pagination code allows for efficient navigation through a large list of items by only displaying a subset of the items at a time.

## Usage

To use the project, simply navigate through the items using the pagination links. You can also add more items to the list by clicking the "Load More Data" button.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.
