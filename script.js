const form = document.querySelector("#searchForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userSearchTerm = form.elements.query.value;
});
