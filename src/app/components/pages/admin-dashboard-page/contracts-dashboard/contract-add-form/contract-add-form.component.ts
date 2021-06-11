import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { CarDetail } from 'src/app/models/car-detail';
import { Class } from 'src/app/models/class';
import { Customer } from 'src/app/models/customer';
import { BranchService } from 'src/app/services/branch.service';
import { CarService } from 'src/app/services/car.service';
import { ClassService } from 'src/app/services/class.service';
import { ContractService } from 'src/app/services/contract.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-contract-add-form',
  templateUrl: './contract-add-form.component.html',
  styleUrls: ['./contract-add-form.component.css']
})
export class ContractAddFormComponent implements OnInit {

  title = 'Sözleşme';
  contractAddForm!: FormGroup;
  branches: Branch[] = [];
  classes: Class[] = [];
  cars: CarDetail[] = [];
  customers: Customer[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private branchService: BranchService,
    private classService: ClassService,
    private carService: CarService,
    private contractService: ContractService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void { 
    this.createContractForm();
    this.getBranch();
    this.getClass();
    this.getCars();
    this.getCustomer();
  }


  createContractForm() {
    this.contractAddForm = this.formBuilder.group({
      plaque: ['', Validators.required],
      contractNo: ['', Validators.required],
      carId: ['', Validators.required],
      customerId : ['', Validators.required],
      classId: ['', Validators.required],
      kilometer: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      gasTank: ['', Validators.required],
      dropOffPleace: ['', Validators.required],
      pickUpPleace: ['', Validators.required],
      day: ['', Validators.required],
      unitPrice: ['', Validators.required],
      total: ['', Validators.required]
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

  add(){
    console.log(this.contractAddForm)
    if(this.contractAddForm.valid){
      let contractModel = Object.assign({},this.contractAddForm.value);
      this.contractService.add(contractModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'contracts']);
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
