import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { Brand } from 'src/app/models/brand';
import { Class } from 'src/app/models/class';
import { Model } from 'src/app/models/model';
import { BranchService } from 'src/app/services/branch.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ClassService } from 'src/app/services/class.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-car-add-form',
  templateUrl: './car-add-form.component.html',
  styleUrls: ['./car-add-form.component.css']
})
export class CarAddFormComponent implements OnInit {

  title = 'Araç';
  carAddForm!: FormGroup;
  brands: Brand[] = [];
  branches: Branch[] = [];
  models: Model[] = [];
  classes: Class[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private brandService: BrandService,
    private branchService: BranchService,
    private modelService: ModelService,
    private classService: ClassService,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    this.createCarForm();
    this.getBrands();
    this.getBranch();
    this.getClass();
    this.getModels();
  }


  createCarForm() {
    this.carAddForm = this.formBuilder.group({
      plaque: ['', Validators.required],
      modelYear: ['', Validators.required],
      chasisNumber: [''],
      engineNumber: [''],
      kilometer : ['', Validators.required],
      maxKilometer: ['', Validators.required],
      periodicMaintenanceKilometer: ['', Validators.required],
      description: [''],
      carPrice: ['', Validators.required],
      isActive:['false'],
      branchOfficeId: ['', Validators.required],
      fleetNumber: ['', Validators.required],
      classId: ['', Validators.required],
      brandId: ['', Validators.required],
      modelId: ['', Validators.required],
      seriId: ['', Validators.required],
      fuel: ['', Validators.required],
      gear: ['', Validators.required],
      body: ['', Validators.required],
      color: ['', Validators.required],
      engineCapacity: ['', Validators.required],
      rateOfEngine: ['', Validators.required]
    });
  }

  /*
  plaque: ['', Validators.required],
    modelYear: ['', Validators.required],
    chasisNumber: ['', Validators.required],
    engineNumber: ['', Validators.required],
    kilometer : ['', Validators.required],
    maxKilometer: ['', Validators.required],
    periodicMaintenanceKilometer: ['', Validators.required],
    description: ['', Validators.required],
    carPrice: ['', Validators.required],
    isActive:['false'],
    branchOfficeId: ['', Validators.required],
    fleetNumber: ['', Validators.required],
    classId: ['', Validators.required],
    brandId: ['', Validators.required],
    modelId: ['', Validators.required],
    seriId: ['', Validators.required],
    fuel: ['', Validators.required],
    gear: ['', Validators.required],
    body: ['', Validators.required],
    color: ['', Validators.required],
    engineCapacity: ['', Validators.required],
    rateOfEngine: ['', Validators.required]
     */
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

  getBranch() {
    this.branchService.getAll().subscribe((c) => {
      this.branches = c.data;
    });
  }

  getClass() {
    this.classService.getAll().subscribe((b) => {
      this.classes = b.data;
    });
  }

  add(){
    console.log(this.carAddForm)
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'cars']);
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
