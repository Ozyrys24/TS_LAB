import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class TextAreaField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.DateField;
        this.TypeField = document.createElement('textarea');
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
        this.TypeField.setAttribute('value', this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
    getValue() {
        return this.TypeField.value;
    }
}
//# sourceMappingURL=TextAreaField.js.map