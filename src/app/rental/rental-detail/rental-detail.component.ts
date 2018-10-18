import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Rental} from '../shared/rental.model';
import { RentalService} from '../shared/rental.service';
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  currentId: number;
  rental: Rental;
  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.rental = new Rental();
    this.route.params.subscribe(
      (params) => {
        console.log(params);

       // this.currentId = params['rentalId'];
       this.getRental(params['rentalId']);
      }
    );
  }
  getRental(rentalId: string) {
   this.rentalService.getrentalById(rentalId).subscribe((rental) => {
     this.rental = rental;
   });
  }

}
