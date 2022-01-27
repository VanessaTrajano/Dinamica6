// Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    nome: "Vanessa",
    idade: 17,
    altura: "180cm"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.interesse = "Leitura"

// Remova uma propriedade desse objeto.

delete eu.altura

//Mostre no console todas as propriedades desse objeto.

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = {
    nome: "Vanessa",
    idade: 17,
    telefone: "(32)984933999",
    amigos: ["Gabriel", "Nicolas", "Samira", "Larissa"]
}

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro.amigos)