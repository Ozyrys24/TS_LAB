import { FieldType } from "./FieldType.js";
import { CheckboxField } from "./CheckboxField.js";
import { DateField } from "./DateField.js";
import { EmailField } from "./EmailField.js";
import { FieldLabel } from "./FieldLabel.js";
import { InputField } from "./InputField.js";
import { SelectField } from "./SelectField.js";
import { TextAreaField } from "./TextAreaField.js";
export class FormCreator {
    constructor(name, label) {
        this.Name = name;
        this.Label = label;
        this.Value = "";
    }
    newForm(fieldType) {
        console.log(fieldType);
        switch (fieldType) {
            case FieldType.CheckboxField:
                return new CheckboxField(this.Name, this.Label, this.Value);
                break;
            case FieldType.DateField:
                return new DateField(this.Name, this.Label, this.Value);
                break;
            case FieldType.EmailField:
                return new EmailField(this.Name, this.Label, this.Value);
                break;
            case FieldType.FieldLabel:
                return new FieldLabel(this.Name, this.Label, this.Value);
                break;
            case FieldType.InputField:
                return new InputField(this.Name, this.Label, this.Value);
                break;
            case FieldType.SelectField:
                return new SelectField(this.Name, this.Label, this.Value);
                break;
            case FieldType.TextAreaField:
                return new TextAreaField(this.Name, this.Label, this.Value);
                break;
            default:
                return new FieldLabel(this.Name, this.Label, this.Value);
        }
    }
}
//# sourceMappingURL=FormCreator.js.map