import { DataStorage } from "./DataStorage.js";
import { Field } from "./Field.js";

export class LocStorage implements DataStorage {

    saveDocument(document: [string,string][]): string {
        const jsonDocument: string = JSON.stringify(document);
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

    loadDocument(id: string): any {
       const jsonForm: string | null = localStorage.getItem(id);
       const document: any = JSON.parse(jsonForm as string);
       return document;
    }

    getDocuments(): string[] {
        const documents: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            documents.push(localStorage.key(i) as string);
        }
        return documents;
    }

}