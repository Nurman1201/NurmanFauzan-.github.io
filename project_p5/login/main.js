const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const query = searchBar.value;
    window.location.href = "https://www.google.com/search?q=" + query;
  }
});
