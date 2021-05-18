import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { Country } from 'src/app/models/country';
import { Customer } from 'src/app/models/customer';
import { CustomerGroup } from 'src/app/models/customer-group';
import { BranchService } from 'src/app/services/branch.service';
import { CountryService } from 'src/app/services/country.service';
import { CustomerGroupService } from 'src/app/services/customer-group.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.css']
})
export class CustomerEditFormComponent implements OnInit {

  title = 'Müşteri';
  customerEditForm!: FormGroup;
  branches: Branch[] = [];
  countries: Country[] = [];
  customerGroups: CustomerGroup[] = [];
  customer!: Customer;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private customerGroupService: CustomerGroupService,
    private customerService: CustomerService,
    private branchService: BranchService,
  ) { }

  ngOnInit(): void {

    this.getCustomerIdFromParam();
    this.getBranches();
    this.getCountries();
    this.getCustomerGroups();
  }

  createAddForm() {
    this.customerEditForm = this.formBuilder.group({
      code: [this.customer.code],
      firmType: [this.customer.firmType],
      lastName: [this.customer.lastName, Validators.required],
      firstName: [this.customer.firstName, Validators.required],
      fullName: [this.customer.fullName, Validators.required],
      tcNumber: [this.customer.tcNumber],
      taxNumber: [this.customer.taxNumber],
      taxOffice: [this.customer.taxOffice],
      countryId: [this.customer.countryId, Validators.required],
      customerType: [this.customer.customerType, Validators.required],
      customerGroupId: [this.customer.customerGroupId, Validators.required],
      email: [this.customer.email, Validators.required],
      phone: [this.customer.phone, Validators.required],
      phone2: [this.customer.phone2, Validators.required],
      branchId: [this.customer.branchId, Validators.required],
      description: [this.customer.description, Validators.required],
      source: [this.customer.source, Validators.required],
      sourceValue: [this.customer.sourceValue, Validators.required],
      isActive: [this.customer.isActive],
      isBlackList: [this.customer.isBlackList],
      isDeposit: [this.customer.isDeposit],
      discount: [this.customer.discount]
    });
  }

  getCustomerIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getByCustomerById(params.id);
      }
    });
  }

  getByCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe((response) => {
      this.customer = response.data;
      this.createAddForm();
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

  update() {
    if (!this.customerEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const customerModel: Customer = { id: this.customer.id, ...this.customerEditForm.value };
    this.customerService.update(customerModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'customers']);
    });
  }

  delete() {}

}
