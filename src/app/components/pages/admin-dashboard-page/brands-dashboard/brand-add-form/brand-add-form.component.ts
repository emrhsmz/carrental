import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add-form',
  templateUrl: './brand-add-form.component.html',
  styleUrls: ['./brand-add-form.component.css']
})
export class BrandAddFormComponent implements OnInit {

  title = "Marka";
  brandAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'brands']);
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
      this.toastrService.error("Marka Bilgisi Eklenemedi.","Hata!");
    }
  }

}
