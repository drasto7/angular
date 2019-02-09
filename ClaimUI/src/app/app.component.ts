import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimHttpService } from './shared/claimHttpService.service';
import {ClaimResultItem} from './claim-result/claim-result-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('f')form: NgForm;

selected: string;
searchOptions = ['Claim Number', 'Authorisation Number', 'Subject'];

ngOnInit() {
    this.selected = 'Claim Number';
}

constructor(private claimHttpService: ClaimHttpService ) {}

onSubmit() {
  console.log(this.form.value.claimNumber);

  if (this.selected === 'Claim Number') {

    this.claimHttpService.getClaimsByClaimNumber(this.form.value.claimNumber) ;

  } else if (this.selected === 'Authorisation Number') {

    this.claimHttpService.getClaimsByAuthNumber(this.form.value.authNumber) ;

  } else if (this.selected === 'Subject') {

    this.claimHttpService.getClaimsBySubject(this.form.value.subject) ;
  }
}

}
