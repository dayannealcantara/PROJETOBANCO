// const cliente1Nome = "Ana"
// const cliente1Cpf = 22255588836
// const cliente1Agencia = 1001
// const cliente1saldo = 0

// const cliente2Nome = "José"
// const cliente2Cpf = 44455588836
// const cliente2Agencia = 1001
// const cliente2saldo = 0

// console.log(cliente1Nome) em vez  disso, usar:

 export class cliente {
   
    get cpf () {
      return  this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
   
}