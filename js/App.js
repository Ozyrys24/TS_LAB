import { Form } from "./Form.js";
import { FormCreator } from "./FormCreator.js";
export class App {
    constructor() {
        this.form = new Form();
        this.key = "";
        const formCreator = new FormCreator();
        formCreator.renderCreateForm();
        const divForm = document.createElement('div');
        divForm.classList.add('createForm');
        formCreator.AddForm(this.form.Fields, divForm);
        document.body.appendChild(divForm);
        const divSave = document.createElement('div');
        divSave.classList.add('save');
        formCreator.saveForm(this.form.Fields, divSave);
        document.body.appendChild(divSave);
    }
    render() {
        this.form.render();
    }
}
//# sourceMappingURL=App.js.map