function search() {
    let sentence = document.getElementById("sentence").value;
    let query = "sap abap " + sentence;
    let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_self");
  }

  let inputBox = document.getElementById("sentence");
  inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      search();
    }
  });

