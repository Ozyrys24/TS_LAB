import { FieldLabel } from "./FieldLabel.js";
import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { EmailField } from "./EmailField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { CheckboxField } from "./CheckboxField.js";
import { TextAreaField } from "./TextAreaField.js";
export class App {
    constructor() {
        this.form = new Form();
        this.form.Fields.push(new InputField("name", 'Imie'));
        this.form.Fields.push(new InputField("surname", "Nazwisko"));
        this.form.Fields.push(new EmailField("email", "Podaj swój email"));
        const select = new SelectField("fieldOfStudy", "Jaki kierunek studiów wybierzesz?");
        select.addOption(new SelectOptionField("iie", "Informatyka i ekonometria", "iie"));
        select.addOption(new SelectOptionField("e", "Ekonometria", "e"));
        this.form.Fields.push(select);
        this.form.Fields.push(new FieldLabel("choice", "Czy Preferujesz e-learning?"));
        this.form.Fields.push(new CheckboxField("yes", "Tak"));
        this.form.Fields.push(new CheckboxField("no", "Nie"));
        this.form.Fields.push(new TextAreaField("comments", "Uwagi"));
    }
    render() {
        this.form.render();
    }
}
//# sourceMappingURL=App.js.map