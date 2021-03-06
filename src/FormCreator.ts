import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { CheckboxField } from "./CheckboxField.js";
import { DateField } from "./DateField.js";
import { EmailField } from "./EmailField.js";
import { FieldLabel } from "./FieldLabel.js";
import { InputField } from "./InputField.js";
import { SelectField } from "./SelectField.js";
import { TextAreaField } from "./TextAreaField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { LocStorage } from "./LocStorage.js";

export class FormCreator {
    Name: string;
    Label: string;
    Options: SelectOptionField[];
    Type: number;
    FormName = new InputField('name','Podaj nazwę fomularza');
    FormLabel = new InputField('label','Podaj nazwę etykiety');
    KindOfField = new SelectField('king','Podaj rodzaj fomularza');
    Key: string = "";

    constructor(name: string = "", label: string = "", type: number = 0, options: SelectOptionField[] = []) {
        this.Name = name;
        this.Label = label;
        this.Options = options;
        this.Type = type;
    }

    newForm(fieldType: FieldType): Field {
        console.log(fieldType);
        switch(fieldType) 
        {
            case FieldType.CheckboxField:
                    return new CheckboxField(this.Name, this.Label, "");
                    break;
                case FieldType.DateField:
                    return new DateField(this.Name, this.Label, "");
                    break;
                case FieldType.EmailField:
                    return new EmailField(this.Name, this.Label, "");
                    break;
                case FieldType.FieldLabel:
                    return new FieldLabel(this.Name, this.Label, "");
                    break;
                case FieldType.InputField:
                    return new InputField(this.Name, this.Label, "");
                    break;
                case FieldType.SelectField:
                    const selectField = new SelectField(this.Name, this.Label, "");
                    this.Options.forEach(option => selectField.addOption(option));
                    return selectField;
                    break;
                case FieldType.TextAreaField:
                    return new TextAreaField(this.Name, this.Label, "");
                    break;       
                default:
                    return new FieldLabel(this.Name, this.Label, "");            
        } 
    }

   renderCreateForm()
    {
        const divCreateForm = document.createElement('div');
        divCreateForm.classList.add('createForm');

        for(let index: number = 0; index < Object.keys(FieldType).length / 2; index++) {
            if(FieldType[index] == 'SelectOptionField') continue;
            this.KindOfField.addOption(new SelectOptionField(index + "", FieldType[index], index + ""));  
        }

        this.FormName.render(divCreateForm);
        this.FormLabel.render(divCreateForm);
        this.KindOfField.render(divCreateForm);

        document.body.appendChild(divCreateForm);
        document.body.appendChild(document.createElement('br'));
    }

    AddForm(fields: Field[], div: HTMLDivElement): HTMLButtonElement {
        
        const addButton = document.createElement('button');
        addButton.innerText = "Dodaj";
        addButton.addEventListener('click',() => {
            const newForm = (new FormCreator(this.FormName.getValue(), this.FormLabel.getValue()).newForm(Number(this.KindOfField.getValue())));
            this.addElement(fields, newForm, div);
        //     const formName = this.FormName;
        //     const formLabel = this.FormName;
            
        // console.log(formName.TypeField);
        //     const newForm = (new FormCreator(this.FormName.getValue(), this.FormLabel.getValue()).newForm(Number(this.KindOfField.getValue())));
        //     newForm.render(div);

        //     if(newForm.Type == FieldType.SelectField) {

        //         const addOption = document.createElement('button');
        //         addOption.innerText = 'Dodaj Opcję';
        //         addOption.addEventListener('click', function(event) {
        //             const selectOption = new SelectOptionField(formName.getValue(), formLabel.getValue(),(newForm as SelectField).Options.length + "");
        //           //  selectOption.addOption((newForm as SelectField).TypeField);
                    
        //             (newForm as SelectField).addOption(selectOption);
        //         });

        //         const deleteOption = document.createElement('button');
        //         deleteOption.innerText = 'Usuń Opcję';
        //         deleteOption.addEventListener('click', function(event) {
        //             (newForm as SelectField).deleteOption(((newForm as SelectField).Options[+newForm.getValue()]));
        //         });

        //         div.appendChild(addOption);
        //         div.appendChild(deleteOption);
        //     }   
        //     fields.push(newForm);
        });
        div.appendChild(addButton);
        return addButton;
    }

    saveForm(fields: Field[], div: HTMLDivElement){
        const saveButton = document.createElement('button');
        saveButton.innerHTML = "Zapisz formularz";
        saveButton.addEventListener('click', () =>{
            this.Key = (new LocStorage).saveForm(fields,this.Key);
        });

        div.appendChild(saveButton);
    }

    render(fields: Field[],key: string = "") {
        
       
        this.renderCreateForm();

        const divForm = document.createElement('div');
        divForm.classList.add('createForm');
        const addElement = this.AddForm(fields,divForm);
        
        const loadedFields = (new LocStorage().loadForm(key))
        let newForm: Field | null = null;
        
        loadedFields.forEach(field => {
            if(field.Type == FieldType.SelectField) newForm = (new FormCreator(field.Name,field.Label,field.Type, (field as SelectField).Options).newForm(Number(field.Type)));
            else newForm = (new FormCreator(field.Name,field.Label)).newForm(Number(field.Type));
            this.addElement(fields, newForm, divForm);
         });

        document.body.appendChild(divForm);

        const divSave = document.createElement('div');
        divSave.classList.add('save');
        this.saveForm(fields,divSave);
        
        document.body.appendChild(divSave);
    }

    addElement(fields: Field[], newForm: Field, div: HTMLDivElement) {
        const formName = this.FormName;
        const formLabel = this.FormLabel;
        const kindOfField = this.KindOfField;
        const button = document.createElement('button');
        newForm.render(div);

        if(newForm.Type == FieldType.SelectField) {
            //(newForm as SelectField).Options.forEach(option => (newForm as SelectField).addOption(option));

            const addOption = document.createElement('button');
            addOption.innerText = 'Dodaj Opcję';
            addOption.addEventListener('click', function(event) {
                const selectOption = new SelectOptionField(formName.getValue(), formLabel.getValue(),(newForm as SelectField).Options.length + "");      
                (newForm as SelectField).addOption(selectOption);
            });

            const deleteOption = document.createElement('button');
            deleteOption.innerText = 'Usuń Opcję';
            deleteOption.addEventListener('click', function(event) {
                (newForm as SelectField).deleteOption(((newForm as SelectField).Options[+newForm.getValue()]));
            });

            div.appendChild(addOption);
            div.appendChild(deleteOption);
        }   
        fields.push(newForm);
    }
}
