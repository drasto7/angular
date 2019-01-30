import { Component, OnInit } from '@angular/core';
import { ClaimResultItem } from './claim-result-item.model';

@Component({
  selector: 'app-claim-result',
  templateUrl: './claim-result.component.html',
  styleUrls: ['./claim-result.component.css']
})
export class ClaimResultComponent implements OnInit {

  selectedClaimNumber: string;
  claimItems: ClaimResultItem[] = [

   // new ClaimResultItem('2345' , 'paid', '230.00' ),
    // new ClaimResultItem('3122' , 'paid', '220.00' )

  ];

  constructor() { }

  ngOnInit() {
  }

  onRowClick(claimItem: ClaimResultItem) {
    console.log('selected Claim : ' + claimItem.claimNumber );
    this.selectedClaimNumber = claimItem.claimNumber;
  }
}
