import { Component, OnInit } from '@angular/core';
import {Area} from '../../../../models/area';
import {AreaDetail} from '../../../../models/area-detail';
import {AreaService} from '../../../../services/area.service';

@Component({
  selector: 'app-areas-dashboard',
  templateUrl: './areas-dashboard.component.html',
  styleUrls: ['./areas-dashboard.component.css']
})
export class AreasDashboardComponent implements OnInit {

  title = 'Bölge';
  areas: Area[] = [];
  areaDetails: AreaDetail[] = [];
  dataLoaded = false;

  constructor(private areaService: AreaService ) { }

  ngOnInit(): void {
    this.getAll();
    this.getAreaDetail();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.areaService.getAll().subscribe((response) => {
      this.areas = response.data;
      this.dataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  getAreaDetail(){
    this.areaService.getAreaDetails().subscribe((response) => {
      this.areaDetails = response.data;
    });
  }
}
