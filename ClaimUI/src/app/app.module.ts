import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClaimResultComponent } from './claim-result/claim-result.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClaimHttpService } from './shared/claimHttpService.service';
import {ClaimService} from './shared/ClaimService.service';

@NgModule({
  declarations: [
    AppComponent,
    ClaimResultComponent,
    ClaimDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClaimHttpService, ClaimService],
  bootstrap: [AppComponent]
})
export class AppModule { }
