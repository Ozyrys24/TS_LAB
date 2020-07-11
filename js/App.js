import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { FormCreator } from "./FormCreator.js";
import { FieldType } from "./FieldType.js";
export class App {
    constructor() {
        this.form = new Form();
        const divCreateForm = document.createElement('div');
        divCreateForm.classList.add('createForm');
        const name = new InputField('name', 'Podaj nazwę fomularza');
        const label = new InputField('label', 'Podaj nazwę etykiety');
        const kindOfField = new SelectField('king', 'Podaj rodzaj fomularza');
        for (let index = 0; index < Object.keys(FieldType).length / 2; index++) {
            if (FieldType[index] == 'SelectOptionField')
                continue;
            kindOfField.addOption(new SelectOptionField(index + "", FieldType[index], index + ""));
        }
        name.render(divCreateForm);
        label.render(divCreateForm);
        kindOfField.render(divCreateForm);
        document.body.appendChild(divCreateForm);
        document.body.appendChild(document.createElement('br'));
        const divForm = document.createElement('div');
        divForm.classList.add('Form');
        const addButton = document.createElement('button');
        addButton.innerText = "Dodaj";
        addButton.addEventListener('click', () => {
            const newForm = (new FormCreator(name.getValue(), label.getValue()).newForm(Number(kindOfField.getValue())));
            newForm.render(divForm);
            if (newForm.Type == FieldType.SelectField) {
                const addOption = document.createElement('button');
                addOption.innerText = 'Dodaj Opcję';
                addOption.addEventListener('click', function (event) {
                    const selectOption = new SelectOptionField(name.getValue(), label.getValue(), newForm.Options.length + "");
                    selectOption.addOption(newForm.TypeField);
                    newForm.addOption(selectOption);
                });
                divForm.appendChild(addOption);
            }
            this.form.Fields.push(newForm);
        });
        divCreateForm.appendChild(addButton);
        document.body.appendChild(divForm);
    }
    render() {
        this.form.render();
    }
}
//# sourceMappingURL=App.js.map