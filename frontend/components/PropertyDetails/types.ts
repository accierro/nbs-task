export type Property = {
  id: string;
  propertyType: string;
  description: string;
  availableDate: string;
  bedRooms: number;
  bathRooms: number;
  isForSale: boolean;
  price: number;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
};
