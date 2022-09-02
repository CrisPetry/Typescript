import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe na dom.`);
        }

    }

    protected abstract template(model: T): string;


    public update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}