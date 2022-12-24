import { ClienData } from "./clientData";

export interface UserData extends ClienData {
    username: string;
    password?: string;
}

export class UserProfile {
    private static loggedInStatus: boolean = false; //set it true and the page will change behavior
    private static id: number = 0; //userid from SQL later

    public static set setLoggedInStatus(status: any) {
        this.loggedInStatus = status;
    }
    public static get getLoggedInStatus(): boolean {
        return this.loggedInStatus;
    }
    public static set setID(status: any) {
        this.loggedInStatus = status;
    }
    public static get getID(): number {
        return this.id;
    }
}