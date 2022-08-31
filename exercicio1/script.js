const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

// for( let i in objeto){
//     console.log(objeto[i].toUpperCase())
// }




// console.log(objeto.nome.toUpperCase())

// const objetoCaixaAlta = (obj) => {

//     const nome = objeto.nome.toUpperCase()
//     const profissao = objeto.profissao.toUpperCase()
//     const username = objeto.username.toUpperCase()
//     const senha = objeto.senha.toUpperCase()

//     return { nome, profissao, username, senha }
// }
// console.log(objetoCaixaAlta(objeto))




const objetoCaixaAlta = (obj) => {

    for (let i in obj) {
        console.log(i + " - " + obj[i].toUpperCase())

    }
}
console.log(objetoCaixaAlta(objeto))



// 2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (obj) => {
    for (let i in obj) {

        return `O nome é ${objeto.nome}, a profissão é ${objeto.profissao}, seu username é ${objeto.username} e sua senha é ${objeto.senha}.`
    }
}
console.log(textoCorrido(objeto))


// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros.
// A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.


// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2


const funcao2 = (cb, obj) => {
   console.log(cb(obj))
 
}

funcao2(objetoCaixaAlta, objeto)

 

const funcao3 = (cb, obj) => {
    console.log(cb(obj))
}


funcao3(textoCorrido,objeto)