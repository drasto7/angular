import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ClaimResultItem } from '../claim-result/claim-result-item.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ClaimService } from './ClaimService.service';

@Injectable()
export class ClaimHttpService {


    constructor(private http: HttpClient, private claimService: ClaimService) {}

  getClaimsByClaimNumber(claimNumber: string) {
    this.http.get<ClaimResultItem[]>('http://localhost:8898/claim/v1/claimByClaimNum/' + claimNumber)
     .subscribe((response => {
         this.claimService.setClaimList(response);
      }
       ),
       (error) => console.log(error)
       );
  }

  getClaimDetail(claimNumber: string) {
    this.http.get<ClaimResultItem[]>('http://localhost:8898/claim/v1/claimByClaimNum/' + claimNumber)
     .subscribe((response => {
         this.claimService.setClaimDetail(response[0]);
      }
       ),
       (error) => console.log(error)
       );
  }

  getClaimsByAuthNumber(authNumber: string) {
    this.http.get<ClaimResultItem[]>('http://localhost:8898/claim/v1/claimByAuthNum/' + authNumber)
     .subscribe((response => {
         this.claimService.setClaimList(response);
      }
       ),
       (error) => console.log(error)
       );
  }

  getClaimsBySubject(subject: string) {
    this.http.get<ClaimResultItem[]>('http://localhost:8898/claim/v1/claimBySubject/' + subject)
     .subscribe((response => {
         this.claimService.setClaimList(response);
      }
       ),
       (error) => console.log(error)
       );
  }
}
