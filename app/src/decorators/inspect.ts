export function inspect() {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`Método: ${propertyKey}`);
            console.log(`Parâmetros: ${JSON.stringify(args)}`);
            OriginalMethod.apply(this, args);
        }

        return descriptor;
    }
}