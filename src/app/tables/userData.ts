import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}

export class UserProfile {
    public static loggedInStatus: boolean = false; //set it true and the page will changes behavior
    public static id: number; //userid from SQL later

    public static setLoggedInStatus(status: boolean): void {
        this.loggedInStatus = status;
    }
}