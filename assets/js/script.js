const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

function mostraPapel() {
  document.getElementById("showPapel").style.display = "block";
  document.getElementById("showPlastico").style.display = "none";
  document.getElementById("showMetal").style.display = "none";
  document.getElementById("showVidro").style.display = "none";
}
function mostraPlastico() {
  document.getElementById("showPapel").style.display = "none";
  document.getElementById("showPlastico").style.display = "block";
  document.getElementById("showMetal").style.display = "none";
  document.getElementById("showVidro").style.display = "none";
}
function mostraMetal() {
  document.getElementById("showPapel").style.display = "none";
  document.getElementById("showPlastico").style.display = "none";
  document.getElementById("showMetal").style.display = "block";
  document.getElementById("showVidro").style.display = "none";
}
function mostraVidro() {
  document.getElementById("showPapel").style.display = "none";
  document.getElementById("showPlastico").style.display = "none";
  document.getElementById("showMetal").style.display = "none";
  document.getElementById("showVidro").style.display = "block";
}

function consultarCepAjax() {
  var cep = $('#cep').val();
  $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data, status) {

    try {

      if (status == 'success') {
        var dadosCep = data

        $('#localidade').val(dadosCep.localidade)
        $('#bairro').val(dadosCep.bairro)
        $('#uf').val(dadosCep.uf)
        $('#logradouro').val(dadosCep.logradouro)
      }
    } catch (error) {
      console.log(error)
    }
  });
}
function mudaPessoaLogada(){
    $('#btnLogin1').hide();
    $('#pessoaLogada').show();
}