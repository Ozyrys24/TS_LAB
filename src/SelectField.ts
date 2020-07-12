import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { FieldLabel } from "./FieldLabel.js";

export class SelectField implements Field {

    Name: string;
    Label: string;
    Type: FieldType = FieldType.SelectField;
    Value: string;
    Options: SelectOptionField[] = [];
    JsonOption: string = "";
    TypeField: HTMLSelectElement = document.createElement('select');
    LabelField: FieldLabel = new FieldLabel("","");

    constructor(name: string, label: string ="", value: string = "") {
        this.Name = name;
        this.Label = label;
        this.Value = value; 
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    
    
    render(div: HTMLDivElement): void {
        this.LabelField.render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name',this.Name);
        this.Options.forEach(option => option.addOption(this.TypeField))
        this.TypeField.selectedIndex = Number(this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
        }
        
    getValue(): string {
        return this.TypeField.selectedIndex + "";
    }

    addOption(option: SelectOptionField) {
        this.Options.push(option);
        option.addOption(this.TypeField);
    }

    deleteOption(option: SelectOptionField): void {
        this.Options = this.Options.filter(o => o.Value != option.Value);
        option.deleteOption(this.TypeField);
    }
    

}