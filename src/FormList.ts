import { LocStorage } from "./LocStorage.js";
import { Field } from "./Field.js";

export class FormList {
    locStorage: LocStorage = new LocStorage();
   formList: string[] = [];
    
    getFormList(): string[] {
        this.formList = this.locStorage.getDocuments().filter(x => x.match(/form*/gm))
        return this.formList;
    }

    fillRender() {
        const div: HTMLDivElement = document.createElement('div');
        const table: HTMLTableElement = document.createElement('table');
        
        this.getFormList().forEach((key) => {
           const tr: HTMLTableRowElement  =  document.createElement('tr');
           
           let td: HTMLTableCellElement =  document.createElement('td');
           td.appendChild(document.createTextNode(key));
           tr.appendChild(td);

           td = document.createElement('td');
           const editForm: HTMLAnchorElement = document.createElement('a');
           editForm.href = `./new-document.html?id=${key}`;
           editForm.innerText = `Wypełnij`;
           td.appendChild(editForm);
           tr.appendChild(td);
            
            table.appendChild(tr);
            console.table(this.getFormId(key));
        });
        
        div.appendChild(table);
        document.body.appendChild(div);
    }

    render(): void {
        const div: HTMLDivElement = document.createElement('div');
        const table: HTMLTableElement = document.createElement('table');
        
        this.getFormList().forEach((key) => {
           const tr: HTMLTableRowElement  =  document.createElement('tr');
           
           let td: HTMLTableCellElement =  document.createElement('td');
           td.appendChild(document.createTextNode(key));
           tr.appendChild(td);

           td = document.createElement('td');
           const editForm: HTMLAnchorElement = document.createElement('a');
           editForm.href = `./edit-form.html?id=${key}`;
           editForm.innerText = `Edit`;
           td.appendChild(editForm);
           tr.appendChild(td);

           td = document.createElement('td');
           const removeForm: HTMLButtonElement = document.createElement('button');
           removeForm.innerText = `Usuń`;
           removeForm.addEventListener('click',() => { 
               this.removeForm(key);
               tr.remove();
            });
            td.appendChild(removeForm);
            tr.appendChild(td);
            
            table.appendChild(tr);
            console.table(this.getFormId(key));
        });
        
        div.appendChild(table);
        document.body.appendChild(div);
    }

    removeForm(key: string): void {
        localStorage.removeItem(key);
    }

    getFormId(key: string) : Field[] {
        return this.locStorage.loadForm(key);
    }
}