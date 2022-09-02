export function inspect() {
    return function (target, propertyKey, descriptor) {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Método: ${propertyKey}`);
            console.log(`Parâmetros: ${JSON.stringify(args)}`);
            OriginalMethod.apply(this, args);
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map