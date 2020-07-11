import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { FormCreator } from "./FormCreator.js";
import { FieldType } from "./FieldType.js";
export class App {
    constructor() {
        this.form = new Form();
        const name = new InputField('name', 'Podaj nazwę fomularza');
        const label = new InputField('label', 'Podaj nazwę etykiety');
        const kindOfField = new SelectField('king', 'Podaj rodzaj fomularza');
        for (let index = 0; index < Object.keys(FieldType).length / 2; index++) {
            kindOfField.addOption(new SelectOptionField(index + "", FieldType[index], index + ""));
        }
        console.log(Object.keys(FieldType));
        const div = document.createElement('div');
        div.classList.add('Form');
        name.render(div);
        label.render(div);
        kindOfField.render(div);
        const addButton = document.createElement('button');
        addButton.innerText = "Dodaj";
        addButton.addEventListener('click', () => {
            const newForm = (new FormCreator(name.getValue(), label.getValue()).newForm(Number(kindOfField.getValue())));
            newForm.render(div);
            this.form.Fields.push(newForm);
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    }
    render() {
        this.form.render();
    }
}
//# sourceMappingURL=App.js.map