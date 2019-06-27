import { Component, OnInit } from '@angular/core';
import { GetservicesService } from '../services/getservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-httpget-id',
  templateUrl: './httpget-id.component.html',
  styleUrls: ['./httpget-id.component.css']
})
export class HttpgetIdComponent implements OnInit {
userid:any=[];
alertName:string;
  constructor(private getServices:GetservicesService,private activeroute:ActivatedRoute) {
    
   }
   getiddetails(){
     this.getServices.userDetails(this.alertName).subscribe(
       res=>{
         this.userid=res;
         console.log(this.userid)
       }
     )
   }
  ngOnInit() {
   
  }

}
