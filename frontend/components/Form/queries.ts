import { BASE_NAME } from "../../config/api";
import { FormFields } from "./types";
import { format } from "date-fns";

export async function postProperty(data: FormFields) {
  try {
    const res = await fetch(BASE_NAME + "/property", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        availableDate: format(new Date(data.availableDate), "yyyy-MM-dd'T'HH:mm:ssXXX"),
        price: parseFloat(data.price),
        bathRooms: parseFloat(data.bathRooms),
        bedRooms: parseFloat(data.bedRooms)
      })
    });
    return res.text();
  } catch (e) {
    throw e;
  }
}
