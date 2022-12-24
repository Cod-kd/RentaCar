import { Component } from '@angular/core';
import { UserProfile } from './tables/userData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentaCar';
  loginStatus: boolean = UserProfile.getLoggedInStatus;
}
