import { Component, OnInit } from '@angular/core';
import {RentalService} from '../shared/rental.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: any;

  testVariable: string;

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const testString: string = '';
    this.testVariable = this.rentalService.testFunction(testString);
    const rentalObservables = this.rentalService.getRentals();

    rentalObservables.subscribe(
      (rentals) => {
    console.log('dfgdg');
        this.rentals = rentals;
      },

      (err) => {

        console.log(err);
      },
      () => {

    });
  }

}
