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
    private toastrService: ToastrService,
    private router: Router,
    private cityService: CityService,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.createAreaForm();
    this.getCities();
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

  getCities() {
    this.cityService.get().subscribe((c) => {
      this.cities = c.data;
    });
  }

  // tslint:disable-next-line:typedef
  add(){
    //console.log(this.cityAddForm)
    if(this.areaAddForm.valid){
      let areaModel = Object.assign({},this.areaAddForm.value);
      this.areaService.add(areaModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        this.router.navigate(['admin', 'areas']);
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
      this.toastrService.error("Bölge Bilgisi eklenemedi.","Hata!");
    }
  }

}
