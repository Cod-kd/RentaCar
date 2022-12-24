import { Component } from '@angular/core';
import { UserData, UserProfile } from '../tables/userData';

@Component({
  selector: 'app-webporfileinformation-table',
  templateUrl: './webporfileinformation-table.component.html',
  styleUrls: ['./webporfileinformation-table.component.scss']
})
export class WebporfileinformationTableComponent {
  userData: UserData = {
    username: "User",
    name: "Aklws Akjwfh",
    tel: "+25 15 215 7887"
  };

  logOut() {
    UserProfile.setID = 0;
    UserProfile.setLoggedInStatus = false;
    console.log(UserProfile.getLoggedInStatus)
  }
}