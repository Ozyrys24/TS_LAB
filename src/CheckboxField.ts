import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";

export class CheckboxField implements Field {

    static Id: number = 1;

    Name: string;
    Label: string;
    TypeField: HTMLInputElement = document.createElement('input');
    Value: string;
    LabelField: FieldLabel = new FieldLabel("","");
    
    constructor(name: string, label: string = "",  value: string = "") {
        this.Name = name;
        this.Value = value; 
        this.Label = label;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    Type: any = "";

    render(div: HTMLDivElement): void {
    this.TypeField.setAttribute("type", "checkbox")
    this.TypeField.setAttribute('name',this.Name);
    this.TypeField.setAttribute('value',this.Value);
    div.appendChild(this.TypeField);
    this.LabelField.render(div);
    div.appendChild(document.createElement('br'));
    }
    
    getValue(): string {
        return this.TypeField.checked + "";
    }

}