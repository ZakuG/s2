import { Component, inject, Inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  housinglocationList: Housinglocation [] = [];

  housingService:HousingService = inject(HousingService);
  
  filteredLocationList:Housinglocation [] = [];

  constructor(
  ){
    this.housinglocationList = this.housingService.getAllHouseingLocations();
    this.filteredLocationList = this.housinglocationList
  }
 
  filterResults(text:string) {
    if(!text) {
      this.filteredLocationList = this.housinglocationList;
      return;
    }
    this.filteredLocationList = this.housinglocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }

}
