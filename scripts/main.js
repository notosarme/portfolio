function fillHeader() {
  fetch("/templates/header.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    });
}

function fillFooter() {
  fetch("/templates/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", (ev) => {
  console.log("DOM fully loaded and parsed");
  fillHeader();
  fillFooter();
});
