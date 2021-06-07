export interface Class{
    id : number;
    name: string;
    isActive: boolean;
    group: number;
    brandId: number;
    modelId : number;
    seriId : number;
    fuel: number;
    gear: number;
    body: number;
    luggage: number;
    people: number;
    isAirConditioning: boolean;
    isNavigation: boolean;
    classCode: string;
    deposit: number;
    isDoubleCreditCart: boolean;
    minDriverAge : number;
    minLicenseAge : number;
    dailyKilometerLimit : number;
    order : number;
    isPopular: boolean;
    isHgs: boolean;
    isInsurarence: boolean;
    isKdv: boolean;
}