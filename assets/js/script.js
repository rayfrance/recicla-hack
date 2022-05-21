const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

function mostraPapel() {
  document.getElementById("showPapel").style.display = "block";
}
function mostraPlastico() {
  document.getElementById("showPlastico").style.display = "block";
}
function mostraMetal() {
  document.getElementById("showMetal").style.display = "block";
}
function mostraVidro() {
  document.getElementById("showVidro").style.display = "block";
}