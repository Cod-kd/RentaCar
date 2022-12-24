import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}

export class UserProfile {
    public static id: number = 1; //userid from SQL later
}