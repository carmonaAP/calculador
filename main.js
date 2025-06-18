  function inserir(valor) {
      document.getElementById('tela').value += valor;
    }

    function limpar() {
      document.getElementById('tela').value = '';
    }

    function calcular() {
      try {
        let resultado = eval(document.getElementById('tela').value);
        document.getElementById('tela').value = resultado;
      } catch (erro) {
        document.getElementById('tela').value = 'Erro';
      }
    }