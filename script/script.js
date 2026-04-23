function salvarCarros(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById("title");
    let preco = document.getElementById("preco");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambioSelecionado ? cambioSelecionado.id :"Não informado";

    let lista = document.getElementById('listarCarros');

    let card = document.createElement('div');
}