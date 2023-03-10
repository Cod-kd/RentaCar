import { Component } from '@angular/core';
import { UserProfile } from '../tables/userData';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  loginStatus: boolean = UserProfile.getLoggedInStatus;
  search(event: any, value: string) {
    event.preventDefault();
    //search in SQL
    console.log(value);
  }
}