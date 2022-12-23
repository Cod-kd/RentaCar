import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}