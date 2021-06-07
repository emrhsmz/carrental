import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerGroup } from 'src/app/models/customer-group';
import { CustomerGroupService } from 'src/app/services/customer-group.service';

@Component({
  selector: 'app-customer-group-edit-form',
  templateUrl: './customer-group-edit-form.component.html',
  styleUrls: ['./customer-group-edit-form.component.css']
})
export class CustomerGroupEditFormComponent implements OnInit {

  
  title = 'Müşteri Grubu';
  customerGroup!: CustomerGroup;
  customerGroupEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private customerGroupService: CustomerGroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomerGroupIdFromParam();
  }

  // tslint:disable-next-line:typedef
  createCustomerGroupForm() {
    this.customerGroupEditForm = this.formBuilder.group({
      name: [this.customerGroup.name, Validators.required],
      discount: [this.customerGroup.discount, Validators.required],
    });
  }

// tslint:disable-next-line:typedef
  getCustomerGroupIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) { this.getCustomerGroupById(params.id); }
    });
  }
// tslint:disable-next-line:typedef
  getCustomerGroupById(id: number) {
    this.customerGroupService.getCustomerGrupById(id).subscribe((response) => {
      this.customerGroup = response.data;

      this.createCustomerGroupForm();
    });
  }
// tslint:disable-next-line:typedef
  update() {
    if (!this.customerGroupEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    const customerGroupModel: CustomerGroup = {
      id: this.customerGroup.id,
      ...this.customerGroupEditForm.value,
    };
    this.customerGroupService.update(customerGroupModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'customergroups']);
    });
  }
// tslint:disable-next-line:typedef
  delete() {
    if (window.confirm('Are you sure delete customer group?')) {
      const customerGroupModel: CustomerGroup = {
        id: this.customerGroup.id,
        ...this.customerGroupEditForm.value,
      };
      this.customerGroupService.delete(this.customerGroup).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'customergroups']);
      });
    }
  }

}
