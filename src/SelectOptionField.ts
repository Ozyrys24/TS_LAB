import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class SelectOptionField {
    
    Name: string;
    Label: string;
    Type: FieldType = FieldType.SelectOptionField;
    Value: string = "";
    TypeField: HTMLOptionElement = document.createElement('option');

    constructor(name: string, label: string, value: string) {
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    
    addOption(select: HTMLSelectElement): void {
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.setAttribute('value',this.Value);
        this.TypeField.innerText = this.Label;
        select.appendChild(this.TypeField);
    }

}