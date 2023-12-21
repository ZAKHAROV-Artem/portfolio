import { EmailReq } from "@/types/request";
import { EmailRes } from "@/types/response";
import axios from "axios";

export default async function email(data: EmailReq) {
  return await axios.post<EmailRes>("/api/email", data);
}
