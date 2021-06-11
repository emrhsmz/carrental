import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { CarDetail } from 'src/app/models/car-detail';
import { Class } from 'src/app/models/class';
import { Contract } from 'src/app/models/contract';
import { Customer } from 'src/app/models/customer';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';
import { ClassService } from 'src/app/services/class.service';
import { ContractService } from 'src/app/services/contract.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-contract-edit-form',
  templateUrl: './contract-edit-form.component.html',
  styleUrls: ['./contract-edit-form.component.css']
})
export class ContractEditFormComponent implements OnInit {

  title = 'Sözleşme';
  contract!: Contract;
  contractEditForm!: FormGroup;
  branches: Branch[] = [];
  classes: Class[] = [];
  cars: CarDetail[] = [];
  customers: Customer[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private branchService: BranchService,
    private classService: ClassService,
    private carService: CarService,
    private contractService: ContractService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.getContractIdFromParam();
    this.getBranch();
    this.getClass();
    this.getCars();
    this.getCustomer();
  }

  createContractForm() {
    this.contractEditForm = this.formBuilder.group({
      contractNo: [this.contract.contractNo, Validators.required],
      carId: [this.contract.carId, Validators.required],
      customerId : [this.contract.customerId, Validators.required],
      classId: [this.contract.classId, Validators.required],
      kilometer: [this.contract.kilometer, Validators.required],
      purchaseDate: [this.contract.purchaseDate, Validators.required],
      dropOffDate: [this.contract.dropOffDate, Validators.required],
      gasTank: [this.contract.gasTank, Validators.required],
      dropOffPleace: [this.contract.dropOffPleace, Validators.required],
      pickUpPleace: [this.contract.pickUpPleace, Validators.required],
      day: [this.contract.day, Validators.required],
      unitPrice: [this.contract.unitPrice, Validators.required],
      total: [this.contract.total, Validators.required]
    });
  }

  getCars() {
    this.carService.getCarDetails().subscribe((a) => {
      this.cars = a.data;
    });
  }

  getBranch() {
    this.branchService.getAll().subscribe((c) => {
      this.branches = c.data;
    });
  }

  getCustomer() {
    this.customerService.getAll().subscribe((n) => {
      this.customers = n.data;
    });
  }

  getClass() {
    this.classService.getAll().subscribe((b) => {
      this.classes = b.data;
    });
  }

  getContractIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getContractById(params.id);
      }
    });
  }

  getContractById(id: number) {
    this.contractService.getContractById(id).subscribe((response) => {
      this.contract = response.data;
      this.createContractForm();
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.contractEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const contractModel: Contract = { id: this.contract.id, ...this.contractEditForm.value };
    this.contractService.update(contractModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'contracts']);
    });
  }

  // tslint:disable-next-line:typedef
  delete() {}

}
