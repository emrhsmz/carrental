import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-add-form',
  templateUrl: './model-add-form.component.html',
  styleUrls: ['./model-add-form.component.css']
})
export class ModelAddFormComponent implements OnInit {

  
  title = 'Model';
  modelAddForm!: FormGroup;
  brands: Brand[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private brandService: BrandService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    this.createModelForm();
    this.getBrands();
  }

  // tslint:disable-next-line:typedef
  createModelForm(){
    this.modelAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  getBrands() {
    this.brandService.getAll().subscribe((c) => {
      this.brands = c.data;
    });
  }

  // tslint:disable-next-line:typedef
  add(){
    //console.log(this.cityAddForm)
    if(this.modelAddForm.valid){
      let modelModel = Object.assign({},this.modelAddForm.value);
      this.modelService.add(modelModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'models']);
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
      this.toastrService.error("Model Bilgisi eklenemedi.","Hata!");
    }
  }


}
