function loadTemplate(file, insertID) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(insertID).innerHTML = data;
    })
    .catch(er => console.error('Error fetching HTML: ' + er));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  loadTemplate('/templates/header.html', 'header');
  loadTemplate('/templates/footer.html', 'footer');
});
