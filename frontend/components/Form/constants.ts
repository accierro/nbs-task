export const DEFAULT_VALUES = {
  propertyType: null,
  description: null,
  availableDate: null,
  bedRooms: 1,
  bathRooms: 1,
  isForSale: true,
  price: 0,
  addressLine1: null,
  addressLine2: null,
  city: null,
  postcode: null
};

export const REGISTER_OPTIONS = {
  propertyType: {
    required: "This field is required"
  },
  description: {
    required: "This field is required",
    minLength: 50,
    maxLength: 1000
  }
};
