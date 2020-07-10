import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class CheckboxField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.CheckboxField;
        this.TypeField = document.createElement('input');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Value = value;
        this.Label = label;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    render(div) {
        this.TypeField.setAttribute("type", "checkbox");
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.checked = (this.Value === "true");
        div.appendChild(this.TypeField);
        this.LabelField.render(div);
        div.appendChild(document.createElement('br'));
    }
    getValue() {
        return this.TypeField.checked + "";
    }
}
CheckboxField.Id = 1;
//# sourceMappingURL=CheckboxField.js.map