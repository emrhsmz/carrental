import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { Branch } from 'src/app/models/branch';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { AreaService } from 'src/app/services/area.service';
import { BranchService } from 'src/app/services/branch.service';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-branch-edit-form',
  templateUrl: './branch-edit-form.component.html',
  styleUrls: ['./branch-edit-form.component.css']
})
export class BranchEditFormComponent implements OnInit {

  title = 'Lokasyon';
  branchEditForm!: FormGroup;
  branch!: Branch;
  countries: Country[] = [];
  cities: City[] = [];
  areas: Area[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService,
    private areaService: AreaService,
    private branchService: BranchService,
  ) { }

  ngOnInit(): void {

    this.getBranchIdFromParam();
    this.getCities();
    this.getCountries();
    this.getAreas();
  }

  createAddForm() {
    this.branchEditForm = this.formBuilder.group({
      name: [this.branch.name, Validators.required],
      countryId: [this.branch.countryId, Validators.required],
      cityId: [this.branch.cityId, Validators.required],
      areaId: [this.branch.areaId, Validators.required],
      address: [this.branch.address, Validators.required],
      order: [this.branch.order, Validators.required],
      email: [this.branch.email, Validators.required],
      phone: [this.branch.phone, Validators.required],
      coordination: [this.branch.coordination, Validators.required],
      code: [this.branch.code, Validators.required],
      description: [this.branch.description],
      isActive: [this.branch.isActive],
      isPleaseOfPurchase: [this.branch.isPleaseOfPurchase],
      isBranch: [this.branch.isBranch]
    });
  }

  getBranchIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getByBranchById(params.id);
      }
    });
  }

  getByBranchById(id: number) {
    this.branchService.getBranchById(id).subscribe((response) => {
      this.branch = response.data;
      this.createAddForm();
    });
  }

  getCountries() {
    this.countryService.get().subscribe((c) => {
      this.countries = c.data;
    });
  }

  getCities() {
    this.cityService.get().subscribe((b) => {
      this.cities = b.data;
    });
  }
  getAreas() {
    this.areaService.getAll().subscribe((a) => {
      this.areas = a.data;
    });
  }

  update() {
    if (!this.branchEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const branchModel: Branch = { id: this.branch.id, ...this.branchEditForm.value };
    this.branchService.update(branchModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'branches']);
    });
  }

  delete() {}

}
