export interface Contract{
    id:number;
    contractNo: string;
    plaque:string;
    pickUpPleace:number;      
    dropOffPleace:number;      
    purchaseDate:Date;
    dropOffDate:Date;
    classId:number;
    carId:number;
    group:number;
    fuel:number;
    gear:number;
    gasTank:number;
    kilometer:number;
    day:number;
    unitPrice:number;
    total:number;
    customerId:number;
}