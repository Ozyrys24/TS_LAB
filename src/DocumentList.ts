import { LocStorage } from "./LocStorage.js";

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
           const td: HTMLTableCellElement =  document.createElement('td');
           td.appendChild(document.createTextNode(key));
           tr.appendChild(td);
           table.appendChild(tr);
        });
        
        div.appendChild(table);
        document.body.appendChild(div);
    }
}