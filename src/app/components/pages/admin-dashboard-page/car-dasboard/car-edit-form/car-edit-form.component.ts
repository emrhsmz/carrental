import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Class } from 'src/app/models/class';
import { Model } from 'src/app/models/model';
import { BranchService } from 'src/app/services/branch.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ClassService } from 'src/app/services/class.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-car-edit-form',
  templateUrl: './car-edit-form.component.html',
  styleUrls: ['./car-edit-form.component.css']
})
export class CarEditFormComponent implements OnInit {

  title = 'Araç';
  car!: Car;
  carEditForm!: FormGroup;
  brands: Brand[] = [];
  branches: Branch[] = [];
  models: Model[] = [];
  classes: Class[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private branchService: BranchService,
    private modelService: ModelService,
    private classService: ClassService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCarIdFromParam();
    this.getBrands();
    this.getBranch();
    this.getClass();
    this.getModels();
  }

  // tslint:disable-next-line:typedef
  createCarForm() {
    this.carEditForm = this.formBuilder.group({
      plaque: [this.car.plaque, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      chasisNumber: [this.car.chasisNumber],
      engineNumber: [this.car.engineNumber],
      kilometer: [this.car.kilometer, Validators.required],
      maxKilometer: [this.car.maxKilometer, Validators.required],
      periodicMaintenanceKilometer: [this.car.periodicMaintenanceKilometer, Validators.required],
      description: [this.car.description],
      carPrice: [this.car.carPrice, Validators.required],
      isActive: [this.car.isActive, Validators.required],
      branchOfficeId: [this.car.branchOfficeId, Validators.required],
      fleetNumber: [this.car.fleetNumber, Validators.required],
      classId: [this.car.classId, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      modelId: [this.car.modelId, Validators.required],
      seriId: [this.car.seriId, Validators.required],
      fuel: [this.car.fuel, Validators.required],
      gear: [this.car.gear, Validators.required],
      body: [this.car.body, Validators.required],
      color: [this.car.color, Validators.required],
      engineCapacity: [this.car.engineCapacity, Validators.required],
      rateOfEngine: [this.car.rateOfEngine, Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  getCarIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getCarById(params.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
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

  // tslint:disable-next-line:typedef
  getCarById(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.car = response.data;
      this.createCarForm();
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.carEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const carModel: Car = { id: this.car.id, ...this.carEditForm.value };
    this.carService.update(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cars']);
    });
  }

  // tslint:disable-next-line:typedef
  delete() {}

}
