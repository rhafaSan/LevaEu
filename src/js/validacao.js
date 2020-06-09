function validacao() {
    if(document.cadas.usuario.value.length < 5 ){
        alert("O nome de usuário deve ter no mínimo 5 caracteres.")
        document.cadas.usuario.focus();
        return false;
    }

    if(document.cadas.senha.value.length < 6 ){
        alert("A senha deve conter no mínimo 6 caracteres e no máximo 15.")
        document.cadas.senha.focus();
        return false;
    }

    if (isNaN(document.cadas.telefone.value)){
        alert ("O campo celular deve conter apenas numeros!");
        document.cadas.telefone.focus();
        return false;
    }

}