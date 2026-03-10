
// VALIDAÇÃO DE FORMULÁRIO
// - Intercepta o envio do formulário
//- Valida os campos utilizando regras e expressões regulares (Regex)
// - Exibe mensagens de erro em elementos <span>
// - Caso tudo esteja correto, mostra mensagem de sucesso
// regex: usada para procurar, testar, substituir ou extrair padrões de texto dentro de strings
//string: uma sequência de caracteres, ou seja, letras, números, símbolos ou espaços, tratados como um bloco de texto


document.getElementById("formulario").addEventListener("submit", function (event) {

    // Impede que o formulário recarregue a página(ele impede o envio automático do formulário)
    event.preventDefault();

    // Variável que controla se todas as validações passaram
    let valido = true;


    //FUNÇÃO DE ERRO(mostra os erros)
    // Mostra mensagens de erro nos spans correspondentes
    // marca o formulário como inválido quando necessário

    function erro(id, mensagem) {
        document.getElementById(id).textContent = mensagem;
        if (mensagem !== "") valido = false;
    }


    // VALIDAÇÃO DE NOME(o trim remove espaços antes e depois)
    //- Deve ter pelo menos 3 caracteres(lenght é a função usada para isso)

    let nome = document.getElementById("nome").value.trim();

    if (nome.length < 3) {
        erro("erro-nome", "Nome deve ter pelo menos 3 caracteres(Zé é Apelido).");
    } else {
        erro("erro-nome", "");
    }


    // VALIDAÇÃO DE EMAIL
    //- Verifica formato padrão de e-mail usando Regex
    // !regex.xxx.test = serve para verificar se o valor digitado corresponde ao padrão definido pela expressão regular. Retorna true ou false.

    let email = document.getElementById("email").value.trim();
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        erro("erro-email", "E-mail inválido.");
    } else {
        erro("erro-email", "");
    }


    // VALIDAÇÃO DE SENHA
    // - Mínimo de 8 caracteres(lenght)
    //- Confirmação deve ser igual à senha(else if (senha !== confirmaSenha))

    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirma-senha").value;

    if (senha.length < 8) {
        erro("erro-senha", "Senha deve ter no mínimo 8 caracteres.");
    } else if (senha !== confirmaSenha) {
        erro("erro-senha", "As senhas não coincidem.");
    } else {
        erro("erro-senha", "");
    }


    //    VALIDAÇÃO DE CPF
    // significado dos símbolos:
    // \d	número
    // {3}	três números
    // .	ponto
    //-	hífen

    // - Formato esperado: 000.000.000-00

    let cpf = document.getElementById("cpf").value;
    let regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!regexCPF.test(cpf)) {
        erro("erro-cpf", "CPF inválido(cancelado). Use 000.000.000-00");
    } else {
        erro("erro-cpf", "");
    }


    // VALIDAÇÃO DE TELEFONE
    //- Formato esperado: (11) 99999-9999

    let telefone = document.getElementById("telefone").value;
    let regexTelefone = /^\(\d{2}\)\s\d{5}\-\d{4}$/;

    if (!regexTelefone.test(telefone)) {
        erro("erro-telefone", "Telefone inválido. Ex: (11) 99999-9999");
    } else {
        erro("erro-telefone", "");
    }


    // VALIDAÇÃO DE CEP
    //- Formato esperado: 00000-000

    let cep = document.getElementById("cep").value;
    let regexCEP = /^\d{5}\-\d{3}$/;

    if (!regexCEP.test(cep)) {
        erro("erro-cep", "CEP inválido. Ex: 00000-000");
    } else {
        erro("erro-cep", "");
    }


    // VALIDAÇÃO DE DATA
    //- Formato esperado: dd/mm/aaaa

    let data = document.getElementById("data-nascimento").value;
    let regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regexData.test(data)) {
        erro("erro-data-nascimento", "Data inválida. Ex: 31/12/1990");
    } else {
        erro("erro-data-nascimento", "");
    }


    //VALIDAÇÃO DE VALOR MONETÁRIO
    //- Formato esperado: 1.299,90

    let valor = document.getElementById("valor").value;
    let regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/;

    if (!regexValor.test(valor)) {
        erro("erro-valor", "Valor inválido. Ex: 1.299,90");
    } else {
        erro("erro-valor", "");
    }


    //VALIDAÇÃO DE URL
    //- Aceita URLs com ou sem http/https

    let url = document.getElementById("url").value;
    let regexURL = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\.-]*)*\/?$/;

    if (!regexURL.test(url)) {
        erro("erro-url", "URL inválida.");
    } else {
        erro("erro-url", "");
    }


    // VALIDAÇÃO DE CARTÃO
    //- Formato esperado: 0000 0000 0000 0000

    let cartao = document.getElementById("cartao").value;
    let regexCartao = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

    if (!regexCartao.test(cartao)) {
        erro("erro-cartao", "Cartão inválido. Ex: 1111 2222 3333 4444");
    } else {
        erro("erro-cartao", "");
    }


    // RESULTADO FINAL
    //- Se todas as validações passarem, mostra sucesso
    //- Caso contrário, pede para corrigir os erros

    if (valido) {

        document.getElementById("resultado").innerHTML =
            "<p style='color:black;'>Formulário enviado com sucesso!</p>";

        document.getElementById("resultado").style.backgroundColor = "green";

        console.log(document.getElementById("resultado").innerHTML);

    } else {

        document.getElementById("resultado").innerHTML =
            "<p style='color:red;'>Corrija os erros antes de enviar.</p>";

    }
    // Fluxo completo do código:
    //Usuário clica enviar
    //JS impede envio     
    //Valida cada campo    
    //Mostra erros nos spans   
    //Se tudo correto → sucesso
    //Se tiver erro → pedir correção
});