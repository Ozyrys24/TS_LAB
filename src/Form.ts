import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { CheckboxField } from "./CheckboxField.js";
import { LocStorage } from "./LocStorage.js";

export class Form {
    Fields: Field[] = [];

    getValue(): [string, string][] {

        const result: [string, string][] = [];
        this.Fields.forEach(field => {
            result.push([field.Name,field.getValue()]);
        })
        console.table(result);
        return result;
    }

    render(key: string = ""): void {
        const div = document.createElement('div');
        document.body.appendChild(div);

        this.Fields.forEach((field: Field) => {
            field.render(div);
        })

        const saveButton = document.createElement('button');
        saveButton.innerText = "Zapisz";
        saveButton.addEventListener('click',() =>{
             (new LocStorage()).saveDocument(this.Fields, key);
             window.location.href = '/index.html';
        });
        div.appendChild(saveButton);

        const backButton = document.createElement('button');
        backButton.innerText = "Wstecz";
        backButton.addEventListener('click',() => window.location.href = '/index.html');
        div.appendChild(backButton);
    }

}