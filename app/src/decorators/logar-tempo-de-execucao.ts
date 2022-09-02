export function logarTempoDeExecucao(segs: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args: Array<any>) {

            let divisor = 1;
            let unidade = 'milisegundos';

            if (segs) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            OriginalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`)

        };

        return descriptor;
    }
}