import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.css']
})
export class AdminDashboardPageComponent implements OnInit {
  title = 'Car Rental | Yönetim Paneli';
  constructor() { }

  ngOnInit(): void {
  }

}
