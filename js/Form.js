import { LocStorage } from "./LocStorage.js";
export class Form {
    constructor() {
        this.Fields = [];
    }
    getValue() {
        const result = [];
        this.Fields.forEach(field => {
            result.push([field.Name, field.getValue()]);
        });
        console.table(result);
        return result;
    }
    render() {
        const div = document.createElement('div');
        document.body.appendChild(div);
        this.Fields.forEach((field) => {
            field.render(div);
        });
        const saveButton = document.createElement('button');
        saveButton.innerText = "Zapisz";
        saveButton.addEventListener('click', () => new LocStorage().saveDocument(this.getValue()));
        div.appendChild(saveButton);
    }
}
//# sourceMappingURL=Form.js.map