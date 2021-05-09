import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityDetail } from 'src/app/models/cityDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-cities-dashboard',
  templateUrl: './cities-dashboard.component.html',
  styleUrls: ['./cities-dashboard.component.css']
})
export class CitiesDashboardComponent implements OnInit {

  cities: City[] = [];
  cityDetails: CityDetail[] = [];
  dataLoaded = false;

  constructor(private cityService: CityService) { }
  title = 'Şehirler';
  ngOnInit(): void {
    this.get();
    this.getCityDetails();
  }

  // tslint:disable-next-line:typedef
  get(){
    this.cityService.get().subscribe(response => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  getCityDetails() {
    this.cityService.getCityDetails().subscribe((response) => {
      this.cityDetails = response.data;
      this.dataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  getCountryDetailsByCountryId(countryId: number) {
    this.cityService.getCountryDetailsByCountryId(countryId).subscribe((response) => {
      this.cityDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
