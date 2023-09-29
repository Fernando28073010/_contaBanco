import { Conta } from "./conta";// esta importando a classe Conta

class ContaPF extends Conta { // esta herdando atributos da classe Conta

    cpf: number;

    constructor(cpf: number, numeroDaconta: number, titular: string, saldo: number) {
        super( titular, saldo);
        this.cpf = cpf;   
    }

    consultar(): string {
        return `Saldo atual: ${this.consultarSaldo()}`;
    }

    sacar(valor: number) {
        if (this.consultarSaldo() > 0 && valor <= this.consultarSaldo()) {
            this.sacarDosaldo(valor);
        }
    }

}


