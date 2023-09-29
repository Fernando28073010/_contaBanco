export class Conta { // o Export é para exportar para outra classe toda afinalidade dessa classe

    private _numeroDaconta: number;
    public titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number) {
        this._numeroDaconta = Math.floor(Math.random() * 1000) + 1;

        this.titular = titular;
        this._saldo = saldo;
    }

    get numeroDaconta(): number {
        return this._numeroDaconta;
    }

    get saldo(): number {
        return this._saldo;
    }

    protected consultarSaldo(): number {
        return this._saldo;
    }

    protected adicionarSaldo(saldo: number): void {
        this._saldo += saldo;
    }

    protected sacarDosaldo(valor: number): void {
        this._saldo -= valor;
    }
}


const primeiraConta = new Conta("Fernando", 1000);
console.log(primeiraConta.numeroDaconta);

const segundaConta = new Conta("Jessica", 2000);
console.log(segundaConta);
 