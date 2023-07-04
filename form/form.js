const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  console.log(data);
});
