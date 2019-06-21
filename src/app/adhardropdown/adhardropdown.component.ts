import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adhardropdown',
  templateUrl: './adhardropdown.component.html',
  styleUrls: ['./adhardropdown.component.css']
})
export class AdhardropdownComponent implements OnInit {

  vote:any;
  adha:any;
  panca:any;

  constructor() { }

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
