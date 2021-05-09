import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-add-form',
  templateUrl: './country-add-form.component.html',
  styleUrls: ['./country-add-form.component.css'],
})
export class CountryAddFormComponent implements OnInit {
  title = 'Ülkeler';
  countryAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.createCarForm();
  }

  createCarForm() {
    this.countryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add(){
    if(this.countryAddForm.valid){
      let countryModel = Object.assign({},this.countryAddForm.value);
      this.countryService.add(countryModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'countries']);
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
