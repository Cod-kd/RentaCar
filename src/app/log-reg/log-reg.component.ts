import { Component } from '@angular/core';

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
}
