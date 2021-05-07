import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-add-form',
  templateUrl: './country-add-form.component.html',
  styleUrls: ['./country-add-form.component.css']
})
export class CountryAddFormComponent implements OnInit {

  title = 'Ülkeler';
  countryAddForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,private router: Router, private countryService:CountryService) { }

  ngOnInit(): void {
    this.createCarForm();
  }


  createCarForm() {
    this.countryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add(){
    if (!this.countryAddForm.valid) {
      this.toastrService.error("Formda eksik alanlar bulunmaktadır.");
      return;
    }
    let countryModule : Country = {...this.countryAddForm.value};
    this.countryService.add(countryModule).subscribe((response)=>{
      this.toastrService.success(response.message);
      this.router.navigate(["admin","countries"]);
    })
  }

}
