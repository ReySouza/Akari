document.getElementById("checkMark").addEventListener("click", function() {
  if (this.innerHTML === "⬜️") {
    this.innerHTML = "⚪️";
  } else {
    this.innerHTML = "⬜️";
  }
});
