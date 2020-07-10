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
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(key));
            tr.appendChild(td);
            td = document.createElement('td');
            const editDocument = document.createElement('a');
            editDocument.href = `./edit-document.html?id=${key}`;
            editDocument.innerText = `Edit`;
            td.appendChild(editDocument);
            tr.appendChild(td);
            td = document.createElement('td');
            const removeDocument = document.createElement('button');
            removeDocument.innerText = `Delete`;
            removeDocument.addEventListener('click', () => {
                this.removeDocument(key);
                tr.remove();
            });
            td.appendChild(removeDocument);
            tr.appendChild(td);
            table.appendChild(tr);
            console.table(this.getDocumentId(key));
        });
        div.appendChild(table);
        document.body.appendChild(div);
    }
    removeDocument(key) {
        localStorage.removeItem(key);
    }
    getDocumentId(key) {
        return this.locStorage.loadDocument(key);
    }
}
//# sourceMappingURL=DocumentList.js.map