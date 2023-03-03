// Banco de dados fake:
const usuarios = [
    {
        nomeUsuario: "batata",
        email: "batata@mail.com",
        senha: "123456",
    },
    {
        nomeUsuario: "cenoura",
        email: "cenoura@mail.com",
        senha: "123456",
    }
];

//Dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

//Botão de entrar
const btnEntrar = document.getElementById("btn-entrar");

//Ouvinte do evento
btnEntrar.addEventListener("click", () => {
    
    // 1) capturar os dados dos inputs
    const email = campoEmail.value;
    const senha = campoSenha.value;
    
    // 2) checar no array se existe usuario com email digitado, se existir, checar a senha

    // find -> percorre o array até encontrar o elemento que satisfaz a condição (retorna o objeto encontrado)
    let usuarioValido = usuarios.find((usuario) => usuario.email === email); // vai percorrer os usuarios e executar essa função a função vai pegar o usuario, vai ver se o email do usuario é igual ao email digitado

    campoEmail.value = "";
    campoSenha.value = "";

    if(usuarioValido !== undefined){
        if(usuarioValido.senha === senha){
            window.location.pathname = `/app.html`
        } else {
            alert("Senha incorreta!");
        }
    } else {
        // o usuario não existe
        alert("Esse usuário não existe.");
    }
    console.log(usuarioValido);
    
})