import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerGroupService } from 'src/app/services/customer-group.service';

@Component({
  selector: 'app-customer-group-add-form',
  templateUrl: './customer-group-add-form.component.html',
  styleUrls: ['./customer-group-add-form.component.css']
})
export class CustomerGroupAddFormComponent implements OnInit {

  
  title = "Müşteri Grubu";
  customerGroupAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private customerGroupService: CustomerGroupService
  ) { }

  ngOnInit(): void {
    this.createCustomerGroupForm();
  }

  createCustomerGroupForm() {
    this.customerGroupAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }

  add(){
    if(this.customerGroupAddForm.valid){
      let customerGroupModel = Object.assign({},this.customerGroupAddForm.value);
      this.customerGroupService.add(customerGroupModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'customergroups']);
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
      this.toastrService.error("Müşteri Grubu Bilgisi Eklenemedi.","Hata!");
    }
  }


}
