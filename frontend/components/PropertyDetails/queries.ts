import { BASE_NAME } from "../../config/api";

export async function deleteProperty(id: string) {
  try {
    const data = await fetch(BASE_NAME + "/property/" + id, { method: "DELETE" }).then();
    return true;
  } catch (e) {
    return false;
  }
}
