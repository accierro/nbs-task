import { Property } from "./types";

export function formatPrice(property: Property) {
  return `£${property.price} ${!property.isForSale ? "per month" : ""}`;
}

export function formatFullAdress(property: Property) {
  return `${property!.addressLine1}${
    property!.addressLine2 ? ", " + property!.addressLine2 : ""
  }, ${property!.city}, ${property!.postcode}`;
}
