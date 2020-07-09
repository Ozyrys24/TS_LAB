import { FieldLabel } from "./FieldLabel.js";
import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { EmailField } from "./EmailField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { CheckboxField } from "./CheckboxField.js";
import { TextAreaField } from "./TextAreaField.js";
import { DocumentList } from "./DocumentList.js";
import { LocStorage } from "./LocStorage.js";

export class App {
    form: Form = new Form();
    
    constructor() {

    this.form.Fields.push(new InputField("name",'Imie'));

    this.form.Fields.push(new InputField("surname","Nazwisko"));

    this.form.Fields.push(new EmailField("email","Podaj swój email"));
    
    const fieldOfStudy: SelectOptionField[] = [
         new SelectOptionField("iie", "Informatyka i ekonometria","iie"),
         new SelectOptionField("e", "Ekonometria","e")
    ]
    this.form.Fields.push(new SelectField("fieldOfStudy", "Jaki kierunek studiów wybierzesz?", fieldOfStudy));

    this.form.Fields.push(new FieldLabel("choice","Czy Preferujesz e-learning?",true));
    this.form.Fields.push(new CheckboxField("yes","Tak"));
    this.form.Fields.push(new CheckboxField("no","Nie"));
    this.form.Fields.push(new TextAreaField("comments","Uwagi"));

  //  const key: string = (new LocStorage).saveForm(this.form.Fields);

   // (document.querySelector("#save") as HTMLElement).addEventListener("click",() => this.form.getValue(key),false);
   // (document.querySelector("#showDocuments") as HTMLElement).addEventListener("click",() => document.body.innerHTML += (new DocumentList).render(),false);


    }

    render(): void {
        this.form.render();
    }

}