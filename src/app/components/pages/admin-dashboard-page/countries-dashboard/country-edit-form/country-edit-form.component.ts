import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-edit-form',
  templateUrl: './country-edit-form.component.html',
  styleUrls: ['./country-edit-form.component.css'],
})
export class CountryEditFormComponent implements OnInit {
  title = 'Ülke';
  country!: Country;
  countryEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountryIdFromParam();
  }

  createCountryForm() {
    this.countryEditForm = this.formBuilder.group({
      name: [this.country.name, Validators.required],
    });
  }

  getCountryIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCountryById(params['id']);
    });
  }

  getCountryById(id: number) {
    this.countryService.getCountryById(id).subscribe((response) => {
      this.country = response.data;

      this.createCountryForm();
    });
  }

  update() {
    if (!this.countryEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let countryModel: Country = {
      id: this.country.id,
      ...this.countryEditForm.value,
    };
    this.countryService.update(countryModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'countries']);
    });
  }

  delete() {
    if (window.confirm('Are you sure delete brand?')) {
      let countryModel: Country = {
        id: this.country.id,
        ...this.countryEditForm.value,
      };
      this.countryService.delete(countryModel).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'countries']);
      });
    }
  }
}
