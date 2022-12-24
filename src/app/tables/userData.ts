import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}

export class UserProfile {
    public static loggedInStatus: boolean = false;
    public static id: number = 0; //userid from SQL later
}