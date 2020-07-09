import { CheckboxField } from "./CheckboxField";

export class FieldType {
    static InputField = document.createElement('input');
    static TextAreaField = document.createElement('textarea');
    static DateField = FieldType.InputField.setAttribute("type", "date") as unknown as HTMLInputElement;
    static EmailField = FieldType.InputField.setAttribute("type", "email") as unknown as HTMLInputElement;  
    static SelectField = document.createElement('select');
    static FieldLabel = document.createElement('label'); 
    static SelectOptionField = document.createElement('option');
    static CheckboxField = FieldType.InputField.setAttribute("type", "checkbox") as unknown as HTMLInputElement
}

