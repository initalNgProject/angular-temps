import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe} from 'ngx-pipes';
@Injectable()
export class MapService {
 private geoCoder;
 private locationCache: any = {};
 constructor(private cameLizePipe: CamelizePipe) {}

 private cacheLocation(location: string, coordinates: any) {
   const camlizeLocation = this.cameLizePipe.transform(location);
   this.locationCache[camlizeLocation] = coordinates;
 }
 public geocodeLocation(location: string): Observable<any> {
   this.geoCoder = new (<any>window).google.maps.geoCoder();

   return new Observable((observer) => {
    this.geoCoder.geocode({address: location}, (result, status) => {
      if (status === 'OK') {
        const geometry = result[0].geometry.location;
        const coordinates = {lat: geometry.lat(), lng: geometry.lng()} ;
        this.cacheLocation(location, coordinates);
        observer.next(coordinates);
      } else {
        observer.error('Location could not be geocded');
      }
    });
   });
 }
}
