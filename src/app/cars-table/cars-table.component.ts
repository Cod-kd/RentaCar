import { Component } from '@angular/core';
import { CarData } from '../tables/carData';
import { RentalHistory } from '../tables/rentalHistory';
import { UserProfile } from '../tables/userData';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent {
  /* from SQL later */
  brand: string | undefined = "";
  rentSelectedCar: RentalHistory = { clientID: UserProfile.getID };
  setCarData(id: number | undefined, brand: string | undefined) {
    this.rentSelectedCar.carID = id;
    this.brand = brand;
  }
  setBookingData(start: string, end: string) {
    this.rentSelectedCar.startAt = new Date(start);
    this.rentSelectedCar.endAt = new Date(end);
  }  
  carsData: CarData[] = [
    {
      carId: 1,
      carBrand: "Ferrari",
      model: "sport",
      year: 2016,
      color: "red",
      pricePerDay: 1500
    },
    {
      carId: 2,
      carBrand: "Suzuki",
      model: "cool",
      year: 2004,
      color: "white",
      pricePerDay: 250
    },
    {
      carId: 3,
      carBrand: "Mazda",
      model: "city",
      year: 2020,
      color: "yellow",
      pricePerDay: 750
    },
    {
      carId: 4,
      carBrand: "Ferrari",
      model: "sport",
      year: 2016,
      color: "red",
      pricePerDay: 1500
    },
    {
      carId: 5,
      carBrand: "Suzuki",
      model: "cool",
      year: 2004,
      color: "white",
      pricePerDay: 250
    },
    {
      carId: 6,
      carBrand: "Mazda",
      model: "city",
      year: 2020,
      color: "yellow",
      pricePerDay: 750
    }
  ];
}