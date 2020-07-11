import { FieldType } from "./FieldType.js";
export class SelectOptionField {
    constructor(name, label, value) {
        this.Type = FieldType.SelectOptionField;
        this.Value = "";
        this.TypeField = document.createElement('option');
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    addOption(select) {
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.setAttribute('value', this.Value);
        this.TypeField.innerText = this.Label;
        select.appendChild(this.TypeField);
    }
    deleteOption(select) {
        select.removeChild(this.TypeField);
    }
}
//# sourceMappingURL=SelectOptionField.js.map