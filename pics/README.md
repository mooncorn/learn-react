# Pics

A React application that demonstrates the use of controlled components, api calls using axios, list rendering and DOM access with Ref. This application allows to search for pictures by making use of Unsplash API and displays the result in a well formatted grid.

`App` - Responsible for rendering `SearchBar` and `ImageList` components. Includes a method to make an API request. Also displays a number of images found.</br>
`SearchBar` - Renders a controlled component that captures the search term and executes a function on form submit provided through the props.</br>
`ImageList` - Maps an array of images into `ImageCard` components.</br>
`ImageCard` - Manages the grid span of image.</br>
