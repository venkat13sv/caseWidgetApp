import { Component } from '@angular/core';
import {  ReactiveFormsModule , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caseWidgetApp';
  searchForm:FormGroup;
  searchObj:any[];
  searchResult:any[];



  searchCases(caseId:string,caseName:string,caseType:string){
    console.log(caseId);
      console.log(caseName);
        console.log(caseType);

  }
}
