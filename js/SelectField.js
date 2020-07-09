import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class SelectField {
    constructor(name, label = "", options = [], value = "") {
        this.Type = FieldType.DateField;
        this.TypeField = document.createElement('select');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.Options = options;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    render(div) {
        this.LabelField.render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.setAttribute('value', this.Value);
        this.Options.forEach(option => option.addOption(this.TypeField));
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
    getValue() {
        var _a;
        return (_a = this.TypeField.options.item(this.TypeField.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText;
    }
    addOption(option) {
        this.Options.push(option);
    }
}
//# sourceMappingURL=SelectField.js.map