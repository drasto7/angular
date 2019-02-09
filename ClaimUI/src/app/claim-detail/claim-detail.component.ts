import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../shared/ClaimService.service';
import { ClaimResultItem } from '../claim-result/claim-result-item.model';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  claimDetail: ClaimResultItem;
  constructor(private claimService: ClaimService) { }

  ngOnInit() {
    this.claimService.claimDetailSet.subscribe(
    (claimDetailItem: ClaimResultItem ) => this.claimDetail = claimDetailItem
    );
  }

}
