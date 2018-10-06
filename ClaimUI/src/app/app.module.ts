import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClaimResultComponent } from './claim-result/claim-result.component';
import { ClaimResultItemComponent } from './claim-result/claim-result-item/claim-result-item.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {Routes,RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClaimResultComponent,
    ClaimResultItemComponent,
    ClaimDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
