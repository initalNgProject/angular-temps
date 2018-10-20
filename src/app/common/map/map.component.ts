import { Component, OnInit, Input} from '@angular/core';
import { MapService } from './map.servcie';
@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() location: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }
  mapReadyHandler() {
  this.mapService.geocodeLocation("dfgf").subscribe(
    (coorinates) => {
    this.lat = coorinates.lat;
    this.lng = coorinates.lng;
  });
  }
}
