const form = document.getElementById('form-pesquisa');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const cnpj = document.getElementById('area-pesquisa').value;
  window.location.href = `./leads/index.html?cnpj=${encodeURIComponent(cnpj)}`;
});