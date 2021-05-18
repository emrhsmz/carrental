import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { Country } from 'src/app/models/country';
import { CustomerGroup } from 'src/app/models/customer-group';
import { BranchService } from 'src/app/services/branch.service';
import { CountryService } from 'src/app/services/country.service';
import { CustomerGroupService } from 'src/app/services/customer-group.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add-form',
  templateUrl: './customer-add-form.component.html',
  styleUrls: ['./customer-add-form.component.css']
})
export class CustomerAddFormComponent implements OnInit {

  title = 'Müşteri';
  customerAddForm!: FormGroup;
  countries: Country[] = [];
  customerGroups: CustomerGroup[] = [];
  branches: Branch[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private countryService: CountryService,
    private customerService: CustomerService,
    private customerGroupService: CustomerGroupService,
    private branchService: BranchService,
  ) {}

  ngOnInit(): void {
    this.createCustomerForm();
    this.getBranches();
    this.getCountries();
    this.getCustomerGroups();
  }

  createCustomerForm() {
    this.customerAddForm = this.formBuilder.group({
      code: [''],
      firmType: ['0'],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      fullName: ['', Validators.required],
      tcNumber: [''],
      taxNumber: [''],
      taxOffice: [''],
      countryId: ['', Validators.required],
      customerType: ['', Validators.required],
      customerGroupId: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      phone2: ['', Validators.required],
      branchId: ['', Validators.required],
      description: ['', Validators.required],
      source: ['', Validators.required],
      sourceValue: ['', Validators.required],
      isActive: ['false'],
      isBlackList: ['false'],
      isDeposit: ['false'],
      discount: [''],
    });
  }

  getCountries() {
    this.countryService.get().subscribe((c) => {
      this.countries = c.data;
    });
  }

  getCustomerGroups() {
    this.customerGroupService.getAll().subscribe((b) => {
      this.customerGroups = b.data;
    });
  }
  getBranches() {
    this.branchService.getAll().subscribe((a) => {
      this.branches = a.data;
    });
  }

  add()
  {
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value);
      this.customerService.add(customerModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'customers']);
      },responseError =>{
        console.log(responseError.error.ValidationErrors)
        if(responseError.error.ValidationErrors.length > 0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası!");
          }
        }
        return;
      }
      )
    }else{
      this.toastrService.error("Müşteri eklenemedi.","Hata!");
    }
  }

}
