import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Rental} from '../shared/rental.model';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {}

 public getrentalById(rentalId: string): Observable<any> {
   console.log('ghfgh');
  return this.http.get('/api/v1/rentals/'  + rentalId);

 }

public getRentals(): Observable<any> {
  return this.http.get('/api/v1/rentals');
}
}
