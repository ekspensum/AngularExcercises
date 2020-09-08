export interface ITranslate {
  requiredField: "Field is required and must be matches";
  ["addEmployee"]:{
    firstName: string;
    lastName: string;
    phone: string;
    selectLanguage: string;
  }
  ["login"]:{
    password: string;
    signin: string;
  }
}
