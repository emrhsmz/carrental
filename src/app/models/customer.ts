export interface Customer {
  id: number;
  code: string;
  firmType: number;
  lastName: string;
  firstName: string;
  fullName: string;
  tcNumber: string;
  taxNumber: string;
  taxOffice: string;
  countryId: number;
  customerType: number;
  customerGroupId: number;
  isActive: boolean;
  email: string;
  phone: string;
  phone2: string;
  branchId: number;
  description: string;
  source: number;
  sourceValue: string;
  isBlackList: boolean;
  isDeposit: boolean;
  discount: number;
}
