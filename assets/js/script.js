const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

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