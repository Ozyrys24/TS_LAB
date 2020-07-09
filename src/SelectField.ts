import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { FieldLabel } from "./FieldLabel.js";

export class SelectField implements Field {

    Name: string;
    Label: string;
    Type: FieldType = FieldType.DateField;
    Value: string;
    Options: SelectOptionField[];
    TypeField: HTMLSelectElement = document.createElement('select');
    LabelField: FieldLabel = new FieldLabel("","");

    constructor(name: string, label: string ="", options: SelectOptionField[] = [], value: string = "") {
        this.Name = name;
        this.Label = label;
        this.Value = value; 
        this.Options = options;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    
    
    render(div: HTMLDivElement): void {
        this.LabelField.render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.setAttribute('value',this.Value);
        this.Options.forEach(option => option.addOption(this.TypeField))
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
        }
        
    getValue(): string {
        return this.TypeField.options.item(this.TypeField.selectedIndex)?.innerText as string;
    }

    addOption(option: SelectOptionField) {
        this.Options.push(option);
    }

}