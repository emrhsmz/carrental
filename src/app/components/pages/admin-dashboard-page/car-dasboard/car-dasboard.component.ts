import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-dasboard',
  templateUrl: './car-dasboard.component.html',
  styleUrls: ['./car-dasboard.component.css']
})
export class CarDasboardComponent implements OnInit {

  
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  dataLoaded = false;

  constructor(private carService: CarService) { }

  title = 'Araç';

  ngOnInit(): void {
    this.getCarDetails();
    this.getAll();
  }

  getAll(){
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }


}
