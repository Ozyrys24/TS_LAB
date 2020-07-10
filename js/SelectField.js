import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class SelectField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.SelectField;
        this.Options = [];
        this.JsonOption = "";
        this.TypeField = document.createElement('select');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    render(div) {
        this.LabelField.render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name', this.Name);
        this.Options.forEach(option => option.addOption(this.TypeField));
        this.TypeField.selectedIndex = Number(this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
    getValue() {
        return this.TypeField.selectedIndex + "";
    }
    addOption(option) {
        this.Options.push(option);
    }
}
//# sourceMappingURL=SelectField.js.map