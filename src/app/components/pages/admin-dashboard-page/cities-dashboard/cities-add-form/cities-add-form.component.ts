import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/country';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-city-add-form',
  templateUrl: './cities-add-form.component.html',
  styleUrls: ['./cities-add-form.component.css'],
})
export class CitiesAddFormComponent implements OnInit {
  title = 'Şehirler';
  cityAddForm!: FormGroup;
  countries: Country[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private cityService: CityService,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.createCityForm();
    this.getCountries();
  }

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      countryId: ['', Validators.required]
    });
  }

  getCountries() {
    this.countryService.get().subscribe((c) => {
      this.countries = c.data;
    });
  }

  get countryName() {
    return this.cityAddForm.get('countryId');
  }

  add(){
    //console.log(this.cityAddForm)
    if(this.cityAddForm.valid){
      let cityModel = Object.assign({},this.cityAddForm.value);
      this.cityService.add(cityModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'cities']);
      },responseError=>{
        if(responseError.error.ValidationErrors.length > 0){
          console.log(responseError.error.ValidationErrors)
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası!");
          }
        }
        return;
      }
      )
    }else{
      this.toastrService.error("Ürün eklenemedi.","Hata!");
    }
  }
}
