import { LocStorage } from "./LocStorage.js";
export class DocumentList {
    constructor() {
        this.locStorage = new LocStorage();
        this.documentList = [];
    }
    getDocumentList() {
        this.documentList = this.locStorage.getDocuments().filter(x => x.match(/document*/gm));
        return this.documentList;
    }
    render() {
        let table = `<table class ="documentList">`;
        this.getDocumentList();
        this.documentList.forEach((key) => {
            table += `<tr><th>${key}</th></tr>`;
        });
        table += `</table>`;
        return table;
    }
}
//# sourceMappingURL=DocumentList.js.map