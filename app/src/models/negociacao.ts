import { comparator } from "../interfaces/comparator.js";

export class Negociacao implements comparator<Negociacao>{
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        const data = new Date(this._data);
        return data;
    }

    get volume(): number {
        return this.valor * this.quantidade;
    }

    public static criarNegociacao(data: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public equals(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }
}