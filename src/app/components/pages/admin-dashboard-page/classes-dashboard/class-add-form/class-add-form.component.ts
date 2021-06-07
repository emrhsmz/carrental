import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { BrandService } from 'src/app/services/brand.service';
import { ClassService } from 'src/app/services/class.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-class-add-form',
  templateUrl: './class-add-form.component.html',
  styleUrls: ['./class-add-form.component.css']
})
export class ClassAddFormComponent implements OnInit {

  title = 'Sınıf';
  classAddForm!: FormGroup;
  brands: Brand[] = [];
  models: Model[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private brandService: BrandService,
    private modelService: ModelService,
    private classService: ClassService,
  ) { }

  ngOnInit(): void {
    this.createClassForm();
    this.getBrands();
    this.getModels();
  }
  
  createClassForm() {
    this.classAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      isActive: ['false'],
      group: ['', Validators.required],
      brandId: ['', Validators.required],
      modelId : ['', Validators.required],
      seriId : ['', Validators.required],
      fuel: ['', Validators.required],
      gear: ['', Validators.required],
      body: ['', Validators.required],
      luggage: ['', Validators.required],
      people: ['', Validators.required],
      isAirConditioning: ['false'],
      isNavigation: ['false'],
      classCode: ['', Validators.required],
      deposit: ['', Validators.required],
      isDoubleCreditCart: ['false'],
      minDriverAge : ['', Validators.required],
      minLicenseAge : ['', Validators.required],
      dailyKilometerLimit : ['', Validators.required],
      order : ['', Validators.required],
      isPopular: ['false'],
      isHgs: ['false'],
      isInsurarence: ['false'],
      isKdv: ['false']
    });
  }

  getBrands() {
    this.brandService.getAll().subscribe((c) => {
      this.brands = c.data;
    });
  }

  getModels() {
    this.modelService.getAll().subscribe((b) => {
      this.models = b.data;
    });
  }

  add(){
    console.log(this.classAddForm)
    if(this.classAddForm.valid){
      let classModel = Object.assign({},this.classAddForm.value);
      this.classService.add(classModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'classes']);
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
