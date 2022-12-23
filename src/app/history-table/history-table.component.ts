import { Component } from '@angular/core';
import { RentalHistory } from '../tables/rentalHistory';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent {
  historyElements: RentalHistory[] = [
    {
      carID: 2,
      startAt: new Date("2022-10-12"),
      endAt: new Date("2022-10-14")
    },
    {
      carID: 3,
      startAt: new Date("2022-11-20"),
    },
    {
      carID: 1,
      startAt: new Date("2022-10-14"),
      endAt: new Date("2022-10-15")
    },
    {
      carID: 2,
      startAt: new Date("2022-12-10")
    }
  ];
}