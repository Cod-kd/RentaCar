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
  signUp(event: any) {
    event.preventDefault();
    /* if data is valid */
    //insert into sql
    this.displayLogin();
  }
  signIn(event: any) {
    event.preventDefault();
    /* if data is valid */
    UserProfile.setLoggedInStatus(true);
  }
}