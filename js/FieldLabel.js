import { FieldType } from "./FieldType.js";
export class FieldLabel {
    constructor(name, label = "", setBR = false, value = "") {
        this.Type = FieldType.FieldLabel;
        this.TypeField = document.createElement('label');
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.SetBR = setBR;
    }
    render(div) {
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.innerText = this.Label;
        div.appendChild(this.TypeField);
        if (this.SetBR)
            div.appendChild(document.createElement('br'));
    }
    getValue() {
        return this.Type.innerText;
    }
}
//# sourceMappingURL=FieldLabel.js.map