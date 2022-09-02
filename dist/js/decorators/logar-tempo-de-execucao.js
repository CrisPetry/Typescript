export function logarTempoDeExecucao(segs = false) {
    return function (target, propertyKey, descriptor) {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (segs) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            OriginalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map