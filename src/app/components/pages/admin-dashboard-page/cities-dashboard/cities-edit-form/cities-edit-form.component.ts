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
  styleUrls: ['./cities-edit-form.component.css'],
})
export class CitiesEditFormComponent implements OnInit {
  title = 'Şehir';
  city!: City;
  cityEditForm!: FormGroup;
  countries: Country[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private cityService: CityService,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCityIdFromParam();
    this.getCountries();
  }

  // tslint:disable-next-line:typedef
  createCityForm() {
    this.cityEditForm = this.formBuilder.group({
      name: [this.city.name, Validators.required],
      countryId: [this.city.countryId, Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  getCityIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getCityById(params.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
  getCountries() {
    this.countryService
      .get()
      .subscribe((response) => (this.countries = response.data));
  }

  // tslint:disable-next-line:typedef
  getCityById(id: number) {
    this.cityService.getCityById(id).subscribe((response) => {
      this.city = response.data;
      this.createCityForm();
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.cityEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const cityModel: City = { id: this.city.id, ...this.cityEditForm.value };
    this.cityService.update(cityModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cities']);
    });
  }

  // tslint:disable-next-line:typedef
  delete() {}
}
