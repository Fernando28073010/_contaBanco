import { Conta } from "./conta";

class ContaPJ extends Conta {

    cnpj: number;

     constructor(cnpj: number, numeroDaconta: number, titular: string, saldo: number) {
        super( titular, saldo);
        this.cnpj = cnpj;
    }
    consultar(): string {
        return `Saldo atual: ${this.consultarSaldo()}`;
    }

    sacar(valor: number) {
        this.sacarDosaldo(valor);
    }

}
 const pessoaJuridica = new ContaPJ(124364747, 162627378, "Marcão o féra", 7000);
 console.log(pessoaJuridica);
