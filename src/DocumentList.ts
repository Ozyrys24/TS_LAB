import { LocStorage } from "./LocStorage.js";
import { Field } from "./Field.js";

export class DocumentList {

    locStorage: LocStorage = new LocStorage();
    documentList: string[] = [];
    
    getDocumentList(): string[] {
        this.documentList = this.locStorage.getDocuments().filter(x => x.match(/document*/gm))
        return this.documentList;
    }

    render(): void {
        const div: HTMLDivElement = document.createElement('div');
        const table: HTMLTableElement = document.createElement('table');
        
        this.getDocumentList().forEach((key) => {
           const tr: HTMLTableRowElement  =  document.createElement('tr');
           
           let td: HTMLTableCellElement =  document.createElement('td');
           td.appendChild(document.createTextNode(key));
           tr.appendChild(td);

           td = document.createElement('td');
           const editDocument: HTMLAnchorElement = document.createElement('a');
           editDocument.href = `./edit-document.html?id=${key}`;
           editDocument.innerText = `Edit`;
           td.appendChild(editDocument);
           tr.appendChild(td);

           td = document.createElement('td');
           const removeDocument: HTMLButtonElement = document.createElement('button');
           removeDocument.innerText = `Delete`;
           removeDocument.addEventListener('click',() => { 
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

    removeDocument(key: string): void {
        localStorage.removeItem(key);
    }

    getDocumentId(key: string) : Field[] {
        return this.locStorage.loadDocument(key);
    }
}