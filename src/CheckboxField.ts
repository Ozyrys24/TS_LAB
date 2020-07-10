import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";

export class CheckboxField implements Field {

    static Id: number = 1;

    Name: string;
    Label: string;
    Type: FieldType = FieldType.CheckboxField;
    Value: string;
    TypeField: HTMLInputElement = document.createElement('input');
    LabelField: FieldLabel = new FieldLabel("","");
    
    constructor(name: string, label: string = "",  value: string = "") {
        this.Name = name;
        this.Value = value; 
        this.Label = label;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }

    render(div: HTMLDivElement): void {
    this.TypeField.setAttribute("type", "checkbox")
    this.TypeField.setAttribute('name',this.Name);
    this.TypeField.checked = (this.Value === "true");
    div.appendChild(this.TypeField);
    this.LabelField.render(div);
    div.appendChild(document.createElement('br'));
    }
    
    getValue(): string {
        return this.TypeField.checked + "";
    }

}