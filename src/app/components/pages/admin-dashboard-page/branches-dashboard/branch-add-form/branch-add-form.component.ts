import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { AreaService } from 'src/app/services/area.service';
import { BranchService } from 'src/app/services/branch.service';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-branch-add-form',
  templateUrl: './branch-add-form.component.html',
  styleUrls: ['./branch-add-form.component.css']
})
export class BranchAddFormComponent implements OnInit {

  title = 'Lokasyon';
  branchAddForm!: FormGroup;
  countries: Country[] = [];
  cities: City[] = [];
  areas: Area[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private countryService: CountryService,
    private cityService: CityService,
    private areaService: AreaService,
    private branchService: BranchService,
  ) {}

  ngOnInit(): void {
    this.createBranchForm();
    this.getCities();
    this.getCountries();
    this.getAreas();
  }

  createBranchForm() {
    this.branchAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      countryId: ['', Validators.required],
      cityId: ['', Validators.required],
      areaId: ['', Validators.required],
      address: ['', Validators.required],
      order: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      coordination: ['', Validators.required],
      code: ['', Validators.required],
      description: [''],
      isActive: ['false'],
      isPleaseOfPurchase: ['false'],
      isBranch: ['false']
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

  add(){
    console.log(this.branchAddForm)
    if(this.branchAddForm.valid){
      let branchModel = Object.assign({},this.branchAddForm.value);
      this.branchService.add(branchModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'branches']);
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
      this.toastrService.error("Lokasyon eklenemedi.","Hata!");
    }
  }

}
