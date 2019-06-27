import { Component, OnInit } from '@angular/core';
import { GetservicesService } from '../services/getservices.service';

@Component({
  selector: 'app-httpmatcard',
  templateUrl: './httpmatcard.component.html',
  styleUrls: ['./httpmatcard.component.css']
})
export class HttpmatcardComponent implements OnInit {
  public users;

  constructor(private service:GetservicesService) {
    this.getdetails();
   }
  getdetails(){
    this.service.interfacedetails().subscribe(
      res=>{
        this.users = res['interfaceInfo'];
        console.log(this.users)
      }
    )
  }

  ngOnInit() {
  }

}
