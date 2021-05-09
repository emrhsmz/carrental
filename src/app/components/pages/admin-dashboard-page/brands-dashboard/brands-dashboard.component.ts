import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.css']
})
export class BrandsDashboardComponent implements OnInit {

  title= "Marka";
  brands: Brand[] = [];
  dataLoaded: boolean = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
}
