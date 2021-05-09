import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries-dashboard',
  templateUrl: './countries-dashboard.component.html',
  styleUrls: ['./countries-dashboard.component.css']
})
export class CountriesDashboardComponent implements OnInit {

  countries: Country[] = [];
  dataLoaded: boolean = false;

  constructor(private countryService:CountryService) { }
  title ="Ülkeler"
  ngOnInit(): void {
    this.get();
  }

  get(){
    this.countryService.get().subscribe(response => {
      this.countries = response.data
      this.dataLoaded= true;
    })
  }
}
