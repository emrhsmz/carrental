import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Class } from 'src/app/models/class';
import { Model } from 'src/app/models/model';
import { BrandService } from 'src/app/services/brand.service';
import { ClassService } from 'src/app/services/class.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-class-edit-form',
  templateUrl: './class-edit-form.component.html',
  styleUrls: ['./class-edit-form.component.css']
})
export class ClassEditFormComponent implements OnInit {

  title = 'Sınıf';
  class!: Class;
  classEditForm!: FormGroup;
  brands: Brand[] = [];
  models: Model[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private modelService: ModelService,
    private brandService: BrandService,
    private classService: ClassService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClassIdFromParam();
    this.getModels();
    this.getBrands();
  }

  // tslint:disable-next-line:typedef
  createClassForm() {
    this.classEditForm = this.formBuilder.group({
      name: [this.class.name, Validators.required],
      isActive:  [this.class.isActive, Validators.required],
      group:  [this.class.group, Validators.required],
      brandId:  [this.class.brandId, Validators.required],
      modelId :  [this.class.modelId, Validators.required],
      seriId :  [this.class.seriId, Validators.required],
      fuel:  [this.class.fuel, Validators.required],
      gear:  [this.class.gear, Validators.required],
      body:  [this.class.body, Validators.required],
      luggage:  [this.class.luggage, Validators.required],
      people:  [this.class.people, Validators.required],
      isAirConditioning:  [this.class.isAirConditioning, Validators.required],
      isNavigation:  [this.class.isNavigation, Validators.required],
      classCode:  [this.class.classCode, Validators.required],
      deposit:  [this.class.deposit, Validators.required],
      isDoubleCreditCart:  [this.class.isDoubleCreditCart, Validators.required],
      minDriverAge :  [this.class.minDriverAge, Validators.required],
      minLicenseAge :  [this.class.minLicenseAge, Validators.required],
      dailyKilometerLimit :  [this.class.dailyKilometerLimit, Validators.required],
      order :  [this.class.order, Validators.required],
      isPopular:  [this.class.isPopular, Validators.required],
      isHgs:  [this.class.isHgs, Validators.required],
      isInsurarence:  [this.class.isInsurarence, Validators.required],
      isKdv:  [this.class.isKdv, Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  getClassIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getClassById(params.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.brandService
      .getAll()
      .subscribe((response) => (this.brands = response.data));
  }
  
  getModels() {
    this.modelService
      .getAll()
      .subscribe((response) => (this.models = response.data));
  }

  // tslint:disable-next-line:typedef
  getClassById(id: number) {
    this.classService.getClassById(id).subscribe((response) => {
      this.class = response.data;
      this.createClassForm();
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.classEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const classModel: Class = { id: this.class.id, ...this.classEditForm.value };
    this.classService.update(classModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'classes']);
    });
  }

  // tslint:disable-next-line:typedef
  delete() {}

}
