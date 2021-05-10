import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { BranchDetail } from 'src/app/models/branch-detail';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branches-dashboard',
  templateUrl: './branches-dashboard.component.html',
  styleUrls: ['./branches-dashboard.component.css']
})
export class BranchesDashboardComponent implements OnInit {

  title= "Lokasyon";
  branch: Branch[] = [];
  branchDetails: BranchDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
    this.getBranchDetail();
  }

  getAll(){
    this.branchService.getAll().subscribe((response) => {
      this.branch = response.data;
      this.dataLoaded = true;
    })
  }

  getBranchDetail(){
    this.branchService.getBranchDetails().subscribe((response) => {
      this.branchDetails = response.data;
    });
  }

}
