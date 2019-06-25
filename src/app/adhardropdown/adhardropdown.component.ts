import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adhardropdown',
  templateUrl: './adhardropdown.component.html',
  styleUrls: ['./adhardropdown.component.css']
})
export class AdhardropdownComponent implements OnInit {
  idproof:FormGroup;
  idproof1:FormGroup;
  idproof2:FormGroup;
  vote:any;
  adha:any;
  panca:any;

  constructor(private fb:FormBuilder) {
    this.idproof=this.fb.group({
      adharNumber:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      adharDetails:['',[Validators.required,Validators.pattern('^[a-zA-Z-]+$')]],
    });
    this.idproof1=this.fb.group({
      panNo:['',[Validators.required,Validators.pattern('^[0-9A-Z]+$')]],
      panName:['',[Validators.required,Validators.pattern('^[a-zA-Z-]+$')]]
    })
    this.idproof2=this.fb.group({
      voteNo:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      dob:['',[Validators.required,Validators.pattern('^[a-zA-Z-]+$')]]
    })
   }

  ngOnInit() {
  }
  carddetails(val){
    this.adha="";
    if(val == 'Adhar'){
      this.adha = val;  
    }
    this.panca="";
    if(val=='pan'){
      this.panca=val;
    }
    this.vote='';
    if(val == 'Vote'){
      this.vote=val;
    }
  }
}
