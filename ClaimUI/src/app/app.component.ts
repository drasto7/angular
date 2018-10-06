import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild("f")form:NgForm;

selected: string;
searchOptions = ['Claim Number', 'Authorisation Number', 'Subject'];

ngOnInit() {
    this.selected = 'Claim Number';
}

onSubmit(){
	console.log(this.form);
}
}
