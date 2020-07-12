import { FieldLabel } from "./FieldLabel.js";
import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { EmailField } from "./EmailField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { CheckboxField } from "./CheckboxField.js";
import { TextAreaField } from "./TextAreaField.js";
import { DocumentList } from "./DocumentList.js";
import { LocStorage } from "./LocStorage.js";
import { FormCreator } from "./FormCreator.js";
import { FieldType } from "./FieldType.js";

export class App {
    form: Form = new Form();
    key: string = "";
    
    constructor() {
        const formCreator = new FormCreator();
       
        formCreator.renderCreateForm();

        const divForm = document.createElement('div');
        divForm.classList.add('createForm');
        formCreator.AddForm(this.form.Fields,divForm);
        
        document.body.appendChild(divForm);

        const divSave = document.createElement('div');
        divSave.classList.add('save');
        formCreator.saveForm(this.form.Fields,divSave);
        
        document.body.appendChild(divSave);
    }

    render(): void {
        this.form.render();
    }

}