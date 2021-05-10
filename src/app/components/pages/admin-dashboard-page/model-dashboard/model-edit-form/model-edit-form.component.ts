import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-edit-form',
  templateUrl: './model-edit-form.component.html',
  styleUrls: ['./model-edit-form.component.css']
})
export class ModelEditFormComponent implements OnInit {

  title = 'Model';
  model!: Model;
  modelEditForm!: FormGroup;
  brands: Brand[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private modelService: ModelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getModelIdFromParam();
    this.getBrands();
  }

  createModelForm() {
    this.modelEditForm = this.formBuilder.group({
      code: [this.model.code, Validators.required],
      brandId: [this.model.brandId, Validators.required],
      name: [this.model.name, Validators.required]
    });
  }

  getModelIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getModelById(params.id);
      }
    });
  }

  getBrands() {
    this.brandService
      .getAll()
      .subscribe((response) => (this.brands = response.data));
  }

  getModelById(id: number) {
    this.modelService.getModelById(id).subscribe((response) => {
      this.model = response.data;
      this.createModelForm();
    });
  }

  update() {
    if (!this.modelEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const modelModel: Model = { id: this.model.id, ...this.modelEditForm.value };
    this.modelService.update(modelModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'models']);
    });
  }

  delete() {}

}
