import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-cities-edit-form',
  templateUrl: './cities-edit-form.component.html',
  styleUrls: ['./cities-edit-form.component.css']
})
export class CitiesEditFormComponent implements OnInit {
  
  title="Şehir";
  city!: City;
  cityDataLoaded: boolean = false;
  countries: Country[] = [];
  citiesEditForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,private cityService: CityService,
    private countryService: CountryService,private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCityIdFromParam();
    this.getCountries();
  }
  

  getCityIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCityById(params['id']);
    });
  }

  getCityById(id: number) {
    this.cityService.getCityById(id).subscribe((response) => {
      this.city = response.data;
      this.cityDataLoaded = true;
      this.createCityForm();
    });
  }

  getCountries() 
  {
    this.countryService.get().subscribe((response) => (this.countries = response.data));
  }
  

  createCityForm() {
    this.citiesEditForm = this.formBuilder.group({
      name: [this.city.name, Validators.required],
      countryId: [this.city.countryId, Validators.required],
    });
  }

  update() {
    if (!this.citiesEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let cityModel: City = { id: this.city.id, ...this.citiesEditForm.value };
    this.cityService.update(cityModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cities']);
    });
  }

  delete() {
    let cityModel: City = { id: this.city.id, ...this.citiesEditForm.value };
    this.cityService.delete(cityModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cities']);
    });
  }

}
