export class LocStorage {
    saveDocument(document) {
        const jsonDocument = JSON.stringify(document);
        const key = `document-${Date.now()}`;
        localStorage.setItem(key, jsonDocument);
        return key;
    }
    saveForm(fields) {
        const jsonForm = JSON.stringify(fields);
        const key = `form-${Date.now()}`;
        localStorage.setItem(key, jsonForm);
        return key;
    }
    loadForm(id) {
        const jsonForm = localStorage.getItem(id);
        const fields = JSON.parse(jsonForm);
        return fields;
    }
    loadDocument(id) {
        const jsonForm = localStorage.getItem(id);
        const document = JSON.parse(jsonForm);
        return document;
    }
    getDocuments() {
        const documents = [];
        for (let i = 0; i < localStorage.length; i++) {
            documents.push(localStorage.key(i));
        }
        return documents;
    }
}
//# sourceMappingURL=LocStorage.js.map