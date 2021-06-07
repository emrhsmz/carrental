import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassDetail } from 'src/app/models/class-detail';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.css']
})
export class ClassesDashboardComponent implements OnInit {

  classes: Class[] = [];
  classDetails: ClassDetail[] = [];
  dataLoaded = false;

  constructor(private classService: ClassService) { }

  title = 'Sınıf';

  ngOnInit(): void {
    //this.getClassDetails();
    this.getAll();
  }

  getAll(){
    this.classService.getAll().subscribe(response => {
      this.classes = response.data;
      this.dataLoaded = true;
    });
  }

  getClassDetails() {
    this.classService.getClassDetails().subscribe((response) => {
      this.classDetails = response.data;
      this.dataLoaded = true;
    });
  }

}
