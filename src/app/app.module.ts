import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';

import { RentalModule } from './rental/rental.module';



const appRoutes: Routes = [
  { path: '', redirectTo: '/rentals', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

],
  imports: [
    BrowserModule,
    RentalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
