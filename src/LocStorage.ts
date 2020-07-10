import { DataStorage } from "./DataStorage.js";
import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectField } from "./SelectField.js";
import { CheckboxField } from "./CheckboxField.js";
import { DateField } from "./DateField.js";
import { EmailField } from "./EmailField.js";
import { FieldLabel } from "./FieldLabel.js";
import { InputField } from "./InputField.js";
import { TextAreaField } from "./TextAreaField.js";
import { SelectOptionField } from "./SelectOptionField.js";

export class LocStorage implements DataStorage {

    // saveDocument(document: [string,string][]): string {
    //     const jsonDocument: string = JSON.stringify(document);
    //     const key: string = `document-${Date.now()}`;

    //     localStorage.setItem(key,jsonDocument);
    //     return key;
    // }

    saveDocument(document:  Field[]): string {
        
        const fields: [string,string,string,number, string][] = [];
        document.forEach(field => { 
            field.Value = field.getValue();
            if(field.Type == FieldType.SelectField)
            {
                const options: [string,string,string][] = [];
                (field as SelectField).Options.forEach(option => {
                    options.push([option.Name,option.Label,option.Value])
                });
                const jsonOption: string = JSON.stringify(options);
                fields.push([field.Name,field.Label,field.Value,field.Type,jsonOption])
            }
            else
            {
                fields.push([field.Name,field.Label,field.Value,field.Type,""]);
            }    
        });
        const jsonDocument: string = JSON.stringify(fields);
        const key: string = `document-${Date.now()}`;

        localStorage.setItem(key,jsonDocument);
        return key;
    }

    saveForm(fields: Field[]): string {
        const jsonForm: string = JSON.stringify(fields);
        const key: string = `form-${Date.now()}`;

        localStorage.setItem(key,jsonForm);
        return key;
    }

    loadForm(id: string): any {
        const jsonForm: string | null = localStorage.getItem(id);
        const fields: any = JSON.parse(jsonForm as string);
        return fields;
     }

    loadDocument(key: string): Field[] {
        const fieldArray: Field[] = [];
        const jsonDocument: string | null = localStorage.getItem(key);
        const fields: [string, string, string, number, string][] = JSON.parse(jsonDocument as string);
         
        fields.forEach(field => {
            switch(field[3]){
                case FieldType.CheckboxField:
                    const checkbox = new CheckboxField(field[0],field[1],field[2]);
                    fieldArray.push(checkbox);
                    break;
                case FieldType.DateField:
                    const date = new DateField(field[0],field[1],field[2]);
                    fieldArray.push(date);
                    break;
                case FieldType.EmailField:
                    const email = new EmailField(field[0],field[1],field[2]);
                    email.Type = field[3];
                    fieldArray.push(email);
                    break;
                case FieldType.FieldLabel:
                    const label = new FieldLabel(field[0],field[1],field[2]);
                    fieldArray.push(label);
                    break;
                case FieldType.InputField:
                    const text = new InputField(field[0],field[1],field[2]);
                    fieldArray.push(text);
                    break;
                case FieldType.SelectField:
                    const select = new SelectField(field[0],field[1],field[2]);
                    select.Type = field[3];
                    const options: [string, string,string][] = JSON.parse(field[4]);
                    options.forEach(option => {
                        select.addOption(new SelectOptionField(option[0], option[1], option[2]))
                    });
                    fieldArray.push(select);
                    break;
                case FieldType.TextAreaField:
                    const textarea = new TextAreaField(field[0],field[1],field[2]);
                    textarea.Type = field[3];
                    fieldArray.push(textarea);
                    break;                   
            }       
        });
       return fieldArray;
    }

    getDocuments(): string[] {
        const documents: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            documents.push(localStorage.key(i) as string);
        }
        return documents;
    }

}