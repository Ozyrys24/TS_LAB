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
        const div = document.createElement('div');
        const table = document.createElement('table');
        this.getDocumentList().forEach((key) => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(key));
            tr.appendChild(td);
            table.appendChild(tr);
        });
        div.appendChild(table);
        document.body.appendChild(div);
    }
}
//# sourceMappingURL=DocumentList.js.map