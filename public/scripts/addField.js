// Procurar o botao
document.querySelector("#add-time")
    // Quando clicar no botao
    .addEventListener('click', cloneField)
// Executar  uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean : true ou false

    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    /*fields[0].value = ""
    fields[1].value = ""*/
    fields.forEach(function () {
        //pegar o field do momento e limpa ele
        fields.value = ""
    })

    //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}