import { LocStorage } from "./LocStorage.js";

export class DocumentList {

    locStorage: LocStorage = new LocStorage();
    documentList: string[] = [];
    
    getDocumentList(): string[] {
        this.documentList = this.locStorage.getDocuments().filter(x => x.match(/document*/gm))
        return this.documentList;
    }

    render(): string {
        let table: string = `<table class ="documentList">`;

        this.getDocumentList();
        this.documentList.forEach((key) => {
            table += `<tr><th>${key}</th></tr>`
        });

        table += `</table>`;
        return table;
    }
}