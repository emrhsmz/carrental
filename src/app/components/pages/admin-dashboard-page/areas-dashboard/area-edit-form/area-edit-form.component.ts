import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { City } from 'src/app/models/city';
import { AreaService } from 'src/app/services/area.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-area-edit-form',
  templateUrl: './area-edit-form.component.html',
  styleUrls: ['./area-edit-form.component.css'],
})
export class AreaEditFormComponent implements OnInit {
  title = 'Bölge';
  area!: Area;
  areaEditForm!: FormGroup;
  cities: City[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private cityService: CityService,
    private areaService: AreaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAreaIdFromParam();
    this.getCities();
  }

  createAreaForm() {
    this.areaEditForm = this.formBuilder.group({
      code: [this.area.code, Validators.required],
      cityId: [this.area.cityId, Validators.required],
      name: [this.area.name, Validators.required],
      smallName: [this.area.smallName, Validators.required],
    });
  }

  getAreaIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getAreaById(params.id);
      }
    });
  }

  getCities() {
    this.cityService
      .get()
      .subscribe((response) => (this.cities = response.data));
  }

  getAreaById(id: number) {
    this.areaService.getAreaById(id).subscribe((response) => {
      this.area = response.data;
      this.createAreaForm();
    });
  }

  update() {
    if (!this.areaEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    const areaModel: Area = { id: this.area.id, ...this.areaEditForm.value };
    this.areaService.update(areaModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'areas']);
    });
  }

  delete() {}
}
