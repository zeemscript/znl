let form = document.querySelector(".form");
form.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name!");
  } else {
    localStorage.setItem("userName", name);
    window.location.href = "game.html";
  }
});

//scroll to top

let btn = document.querySelector(".Btn");
btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
