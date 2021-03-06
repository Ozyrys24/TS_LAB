import { Field } from "./Field.js";

export interface DataStorage {
    //saveDocument(document: [string,string][]): string;
    saveDocument(document: Field[], key: string ): string;
    loadDocument(id: string): any;
    getDocuments(): string[];
}