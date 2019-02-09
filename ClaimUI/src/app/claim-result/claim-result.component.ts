import { Component, OnInit } from '@angular/core';
import { ClaimResultItem } from './claim-result-item.model';
import { ClaimService } from '../shared/ClaimService.service';
import { ClaimHttpService } from '../shared/claimHttpService.service';

@Component({
  selector: 'app-claim-result',
  templateUrl: './claim-result.component.html',
  styleUrls: ['./claim-result.component.css']
})
export class ClaimResultComponent implements OnInit {

  selectedClaimNumber: string;
  claimItems: ClaimResultItem[];
  constructor(private claimService: ClaimService, private claimhttpService: ClaimHttpService) { }

  ngOnInit() {
    this.claimService.claimResultSet.subscribe(
      (claimList) => {
        console.log(this.claimService.getClaimList());
        this.claimItems = this.claimService.getClaimList();
        this.selectedClaimNumber = '' ;
      }
    );
  }

  onRowClick(claimItem: ClaimResultItem) {
    console.log('selected Claim : ' + claimItem.claimNumber);
    this.selectedClaimNumber = claimItem.claimNumber;
    this.claimhttpService.getClaimDetail(claimItem.claimNumber);

  }
}
