import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  SampleForm:FormGroup;
  countrylist=[]
  states=[];
  cities=[];
  villages=[];

  onSelectCountry() {
    let index=this.countrylist.findIndex(x=>x.id==this.SampleForm.value.country);
    if(index!=-1){
      this.states=this.countrylist[index].stateList;
    }
  }
  onSelectState(){
    let index=this.states.findIndex(x=>x.stateId==this.SampleForm.value.state);
    if(index!=-1){
      this.cities=this.states[index].cities;
    }
  }
  onSelectCity(){
    let index=this.cities.findIndex(x=>x.cityId==this.SampleForm.value.city);
    if(index!=-1){
      this.villages=this.cities[index].villages;
    }
  }
  

    ngOnInit(){
    this.SampleForm=this.fb.group({
      country:[null,Validators.required],
      state:[null,Validators.required],
      city:[null,Validators.required],
      village:[null,Validators.required]
    })
  }

  getCountries() {
    this.countrylist=[
      { id: 1, name: 'India',
      stateList:[
        {stateId:1,stateName:"Andhra Pradesh",
      cities:[
        {cityId:1,cityName:"Guntur",
      villages:[
          {villId:1,villName:"vinukonda"},
          {villId:2,villName:"ponoor"}
        ]},
        {cityId:2,cityName:"West-Godavari",
      villages:[
        {villId:1,villName:"bimmavaram"},
        {villId:2,villName:"palakolu"}
      ]}
      ]},
        {stateId:2,stateName:"Telangana",
        cities:[
          {cityId:1,cityName:"Hyderabad",
        villages:[
          {villId:1,villName:"Nizampet"},
          {villId:2,villName:"Malkajgiri"}
        ]},
          {cityId:2,cityName:"Nizamabad",
        villages:[
          {villId:1,villName:"Varni"},
          {villId:2,villName:"Bodhan"}
        ]}
        ]}
      ],
    },
      { id: 2, name: 'USA',stateList:[
        {stateId:1,stateName:"San Franciso",cities:[
          {cityId:1,cityName:"Kanigiri",
        villages:[
          {villId:1,villName:"Money"},
          {villId:2,villName:"Cash"}
        ]},
          {cityId:2,cityName:"TTTTT",
        villages:[
          {villId:1,villName:"bimmavaram"},
          {villId:2,villName:"palakolu"}
        ]}
        ]},
        {stateId:2,stateName:"Los Angeles",cities:[
          {cityId:1,cityName:"HMT",
        villages:[
          {villId:1,villName:"Inter"},
          {villId:2,villName:"Venu"}
        ]},
          {cityId:2,cityName:"Tmt",
        villages:[
          {villId:1,villName:"Tannn"},
          {villId:2,villName:"Tndier"}
        ]}
        ]}
      ] },
      { id: 3, name: 'Australia',stateList:[
        {stateId:1,stateName:"new south Wales",
      cities:[
        {cityId:1,cityName:"Sydney",
      villages:[
        {villId:1,villName:"SeaWorld"},
        {villId:2,villName:"Tech"}
      ]},
        {cityId:2,cityName:"Goulburn",
      villId:1,villName:"MyWorld"}
      ]},
        {stateId:2,stateName:"Victoria",
      cities:[
        {cityId:1,cityName:"Lithgow"},
        {cityId:2,cityName:"Tamworth"}
      ]}
      ] }
    ];
  }
 


  constructor(private fb:FormBuilder) { 
    this.getCountries();
  }


}
