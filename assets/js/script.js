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

function mostraPapel2() {
  document.getElementById("showPapel2").style.display = "block";
  document.getElementById("showPlastico2").style.display = "none";
  document.getElementById("showMetal2").style.display = "none";
  document.getElementById("showVidro2").style.display = "none";

}
function mostraPlastico2() {
  document.getElementById("showPapel2").style.display = "none";
  document.getElementById("showPlastico2").style.display = "block";
  document.getElementById("showMetal2").style.display = "none";
  document.getElementById("showVidro2").style.display = "none";
}
function mostraMetal2() {
  document.getElementById("showPapel2").style.display = "none";
  document.getElementById("showPlastico2").style.display = "none";
  document.getElementById("showMetal2").style.display = "block";
  document.getElementById("showVidro2").style.display = "none";
}
function mostraVidro2() {
  document.getElementById("showPapel2").style.display = "none";
  document.getElementById("showPlastico2").style.display = "none";
  document.getElementById("showMetal2").style.display = "none";
  document.getElementById("showVidro2").style.display = "block";
}

function mudaPessoaLogada(){
  $('#btnLogin1').hide();
  $('#pessoaLogada').show();
  $("#closeLogin").click();
  $("#bodyClick").click();
}

function mostraRanking() {
  document.getElementById("showRanking").style.display = "block";
  document.getElementById("showTragetoria").style.display = "none";
  document.getElementById("showFeedback").style.display = "none";
  
}
function mostraTragetoria() {
  document.getElementById("showRanking").style.display = "none";
  document.getElementById("showTragetoria").style.display = "block";
  document.getElementById("showFeedback").style.display = "none";
  }
function mostraFeedback() {
  document.getElementById("showRanking").style.display = "none";
  document.getElementById("showTragetoria").style.display = "none";
  document.getElementById("showFeedback").style.display = "block";
  }