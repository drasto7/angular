import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ClaimResultItem } from '../claim-result/claim-result-item.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ClaimHttpService {


    constructor(private http: HttpClient) {}

  getClaimsByClaimNumber(claimNumber: string) {
    this.http.get<ClaimResultItem>('http://localhost:8898/claim/v1/claimByClaimNum/' + claimNumber)
     .subscribe((response => {
         console.log(response);
      }
       ),
       (error) => console.log(error)
       );
}
}
