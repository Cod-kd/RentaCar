import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}

export class UserProfile {
    public static loggedInStatus: boolean; //set it true and the page will change behavior
    public static id: number; //userid from SQL later

    public static set setLoggedInStatus(status:any) {
        this.loggedInStatus = status
    }
}