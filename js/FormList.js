import { LocStorage } from "./LocStorage.js";
export class FormList {
    constructor() {
        this.locStorage = new LocStorage();
        this.formList = [];
    }
    getFormList() {
        this.formList = this.locStorage.getDocuments().filter(x => x.match(/form*/gm));
        return this.formList;
    }
    fillRender() {
        const div = document.createElement('div');
        const table = document.createElement('table');
        this.getFormList().forEach((key) => {
            const tr = document.createElement('tr');
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(key));
            tr.appendChild(td);
            td = document.createElement('td');
            const editForm = document.createElement('a');
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
    render() {
        const div = document.createElement('div');
        const table = document.createElement('table');
        this.getFormList().forEach((key) => {
            const tr = document.createElement('tr');
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(key));
            tr.appendChild(td);
            td = document.createElement('td');
            const editForm = document.createElement('a');
            editForm.href = `./edit-form.html?id=${key}`;
            editForm.innerText = `Edit`;
            td.appendChild(editForm);
            tr.appendChild(td);
            td = document.createElement('td');
            const removeForm = document.createElement('button');
            removeForm.innerText = `Usuń`;
            removeForm.addEventListener('click', () => {
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
    removeForm(key) {
        localStorage.removeItem(key);
    }
    getFormId(key) {
        return this.locStorage.loadForm(key);
    }
}
//# sourceMappingURL=FormList.js.map