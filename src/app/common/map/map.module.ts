import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService} from './map.servcie';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQxYP8IotnUfhoNdIksknAgpS7lKwmKZE'
    })
  ],
  providers: [MapService],
  declarations: [ MapComponent ],
  exports: [MapComponent]

})
export class MapModule {}
