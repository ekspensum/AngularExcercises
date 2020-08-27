export interface ITreatments {
    "treatmentCategoriesList": Array<ITreatmentCategoriesList>;
    "dentalTreatmentsList": null;
}

export interface ITreatmentCategoriesList {
    "id": number;
    "categoryName": string;
    "dentalTreatment": Array<IDentalTreatment>;
    "userLogged": null;
    "registeredDateTime": Date;
    "editedDateTime": Date;
}
 
export interface IDentalTreatment {
    "id": number;
    "name": string;
    "description": string;
    "price": number;
    "registeredDateTime": Date;
    "editedDateTime": Date;
}