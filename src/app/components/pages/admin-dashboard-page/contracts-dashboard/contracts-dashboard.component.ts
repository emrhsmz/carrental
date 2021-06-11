import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { ContractDetail } from 'src/app/models/contract-detail';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contracts-dashboard',
  templateUrl: './contracts-dashboard.component.html',
  styleUrls: ['./contracts-dashboard.component.css']
})
export class ContractsDashboardComponent implements OnInit {

  contracts: Contract[] = [];
  contractDetails: ContractDetail[] = [];
  dataLoaded = false;

  constructor(private contractService: ContractService) { }

  title = 'Sözleşme';

  ngOnInit(): void {
    this.getContractDetails();
    this.getAll();
  }

  getAll(){
    this.contractService.getAll().subscribe(response => {
      this.contracts = response.data;
      this.dataLoaded = true;
    });
  }

  getContractDetails() {
    this.contractService.getContractDetails().subscribe((response) => {
      this.contractDetails = response.data;
      this.dataLoaded = true;
    });
  }


}
