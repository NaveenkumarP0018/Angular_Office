import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

export interface IcountryData{
  countryId:number;
  countryName:string;
  stateList:IStateData[];
}
export interface IStateData{
  stateId:number;
  stateName:string
}
interface FoodNode {
  name: string;
  children?: FoodNode[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 title = 'Login-Form';
 sampleForm:FormGroup;
 loginform:FormGroup;
 myControl= new FormControl();
 options=['one','two','three'];
 name:string="";
 aliesname:string="";
 hide=true;
coutryData:IcountryData[]=[
  {countryId:1,countryName:"India",stateList:[
    {stateId:1,stateName:"Andhra Pradesh"},
    {stateId:2,stateName:"Telangana"},
    {stateId:3,stateName:"TamilNadu"}
  ]},
  {countryId:2,countryName:"Australia",stateList:[
    {stateId:1,stateName:"xxx"},
    {stateId:2,stateName:"asddds"},
    {stateId:3,stateName:"sdfdf"}
  ]}
]
constructor(private fb:FormBuilder){
  this.loginform=this.fb.group({
    Firstname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength]],
    dropdown:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    State:['',Validators.required],
    postal:['',Validators.required]
  })
}
onCountrySelection(selectedvalue){
  console.log("selectedCountry:::",selectedvalue); 
}
getdetails(){
  console.log(this.loginform);
  
}
}





