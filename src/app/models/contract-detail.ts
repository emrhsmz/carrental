export interface ContractDetail {
    id:number;
    contractNo: string;
    plaque:string;
    pickUpPleace:string;      
    dropOffPleace:string;      
    purchaseDate:Date;
    dropOffDate:Date;
    classCode:string;
    carName:string;
    customerName:string;
    group:number;
    fuel:number;
    gear:number;
    gasTank:number;
    kilometer:number;
    day:number;
    unitPrice:number;
    total:number;
}