import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { NgPipesModule, CamelizePipe } from 'ngx-pipes';

import { HttpClientModule } from '@angular/common/http';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RouterModule, Routes } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
import { MapModule } from '../common/map/map.module';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      { path:  '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]

  }
];
@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe

  ],
  imports: [CommonModule,
    HttpClientModule,
    MapModule,
    NgPipesModule,
  RouterModule.forChild(routes) ],
  providers: [RentalService
  ,
  CamelizePipe ]

})
export class RentalModule  {

}
