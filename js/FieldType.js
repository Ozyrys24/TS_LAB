export class FieldType {
}
FieldType.InputField = document.createElement('input');
FieldType.TextAreaField = document.createElement('textarea');
FieldType.DateField = FieldType.InputField.setAttribute("type", "date");
FieldType.EmailField = FieldType.InputField.setAttribute("type", "email");
FieldType.SelectField = document.createElement('select');
FieldType.FieldLabel = document.createElement('label');
FieldType.SelectOptionField = document.createElement('option');
FieldType.CheckboxField = FieldType.InputField.setAttribute("type", "checkbox");
//# sourceMappingURL=FieldType.js.map