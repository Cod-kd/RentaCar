import { Component } from '@angular/core';
import { UserProfile } from '../tables/userData';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss']
})
export class LogRegComponent {
  logState: string = "active";
  regState: string = "";
  displayLogin() {
    this.logState = "active";
    this.regState = "";
  }
  displayRegister() {
    this.regState = "active";
    this.logState = "";
  }
  signUp(event: any, name: string, username: string, email: string, tel: string, password: string, repeatPassword: string) {
    event.preventDefault();
    /* if data is valid & password == repeatPassword */
    //insert into sql
    console.log(name, username, email, tel, password, repeatPassword);
    this.displayLogin();
  }
  signIn(event: any, username: string, password: string) {
    event.preventDefault();
    /* if data in SQL */
    //UserProfile.setID = SQL id
    console.log(username, password);
    UserProfile.setLoggedInStatus = true;
    console.log(UserProfile.getLoggedInStatus);
  }
}