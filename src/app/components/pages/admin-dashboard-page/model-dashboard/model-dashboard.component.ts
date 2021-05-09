import { Component, OnInit } from '@angular/core';
import { ModelDetail } from 'src/app/models/model-detail';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-dashboard',
  templateUrl: './model-dashboard.component.html',
  styleUrls: ['./model-dashboard.component.css']
})
export class ModelDashboardComponent implements OnInit {

  title = 'Bölge';
  models: Model[] = [];
  modelDetails: ModelDetail[] = [];
  dataLoaded = false;

  constructor(private modelService: ModelService ) { }

  ngOnInit(): void {
    this.getAll();
    this.getModelDetail();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.modelService.getAll().subscribe((response) => {
      this.models = response.data;
      this.dataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  getModelDetail(){
    this.modelService.getModelDetails().subscribe((response) => {
      this.modelDetails = response.data;
    });
  }

}
