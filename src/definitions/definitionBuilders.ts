import ObjectDefinition, { Type } from "definitions/ObjectDefinition";
import ValueDefinition from "definitions/ValueDefinition";

export function diObject(
    classConstructor: Type<any>,
    name: string = undefined
) {
    if (name === undefined) {
        name = classConstructor.name;
    }
    return new ObjectDefinition(name, classConstructor);
}

export function diValue(
    name: string, value: any
) {
    return new ValueDefinition(name, value);
}