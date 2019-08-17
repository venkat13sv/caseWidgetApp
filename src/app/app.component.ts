import { Component } from '@angular/core';
import {  ReactiveFormsModule , FormGroup } from '@angular/forms';
import { CaseService } from './case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caseWidgetApp';
  searchForm:FormGroup;
  searchObj:any;
  searchResult:any;
  obj:any;
  constructor(private _caseService: CaseService) { }




  searchCases(caseId:string,caseName:string,caseType:string){
    //console.log(caseId);
    //console.log(caseName);
    //console.log(caseType);
    if(caseId==""&&caseName==""&&caseType=="")
      alert("Please enter data!");
    else
    {
        this.obj={
          "caseId":caseId,
          "caseName":caseName,
          "caseType":caseType
        };
        this.searchObj=<JSON>this.obj;
        console.log("Search Obj: "+ JSON.stringify(this.searchObj));
        this._caseService.getCases(this.searchObj).subscribe(
        (response:any) =>{
          if(response.result.length>0)
            this.searchResult=response.result;
          else
            this.searchResult=[{"id":"","name":"Sorry! No case data found for your search","description":""}];
          console.log("Response from server: "+ JSON.stringify(this.searchResult));
        },
        err => console.log(err)
      );
    }
  }
}
