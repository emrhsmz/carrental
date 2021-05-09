import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Country } from 'src/app/models/country';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit-form',
  templateUrl: './brand-edit-form.component.html',
  styleUrls: ['./brand-edit-form.component.css']
})
export class BrandEditFormComponent implements OnInit {

  title = 'Marka';
  brand!: Brand;
  brandEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBrandIdFromParam();
  }

  // tslint:disable-next-line:typedef
  createBrandForm() {
    this.brandEditForm = this.formBuilder.group({
      name: [this.brand.name, Validators.required],
    });
  }

// tslint:disable-next-line:typedef
  getBrandIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) { this.getBrandById(params.id); }
    });
  }
// tslint:disable-next-line:typedef
  getBrandById(id: number) {
    this.brandService.getBrandId(id).subscribe((response) => {
      this.brand = response.data;

      this.createBrandForm();
    });
  }
// tslint:disable-next-line:typedef
  update() {
    if (!this.brandEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    const brandModel: Brand = {
      id: this.brand.id,
      ...this.brandEditForm.value,
    };
    this.brandService.update(brandModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'brands']);
    });
  }
// tslint:disable-next-line:typedef
  delete() {
    if (window.confirm('Are you sure delete brand?')) {
      const brandModel: Brand = {
        id: this.brand.id,
        ...this.brandEditForm.value,
      };
      this.brandService.delete(brandModel).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'brands']);
      });
    }
  }
}
