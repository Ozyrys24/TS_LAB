import type { FieldType } from "./FieldType.js";

export interface Field {
    Name:string,
    Label:string,
    Type: FieldType,
    Value:string;
    render(div: HTMLDivElement): void;
    getValue(): string

}