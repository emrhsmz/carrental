import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City} from '../../../../../models/city';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CityService} from '../../../../../services/city.service';
import {AreaService} from '../../../../../services/area.service';
import {Area} from '../../../../../models/area';

@Component({
  selector: 'app-area-add-form',
  templateUrl: './area-add-form.component.html',
  styleUrls: ['./area-add-form.component.css']
})
export class AreaAddFormComponent implements OnInit {

  title = 'Şehir';
  areaAddForm!: FormGroup;
  cities: City[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrSerice: ToastrService,
    private router: Router,
    private cityService: CityService,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.createAreaForm();
  }

  // tslint:disable-next-line:typedef
  createAreaForm(){
    this.areaAddForm = this.formBuilder.group({
      code: ['', Validators.required],
      cityId: ['', Validators.required],
      name: ['', Validators.required],
      smallName: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  add(){

  }

}
