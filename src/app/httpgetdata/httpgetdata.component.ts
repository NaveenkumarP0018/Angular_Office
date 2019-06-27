import { Component, OnInit } from '@angular/core';
import { GetservicesService } from '../services/getservices.service';
import { ActivatedRoute } from '@angular/router';

export interface IOrg {
  address: string;
  emailId: string;
  logoPath: string;
  mobileNo: string;
  orgId: number;
  organization: string;
  status: number;
}

export interface RootObject {
  orgs: IOrg[];
}

@Component({
  selector: 'app-httpgetdata',
  templateUrl: './httpgetdata.component.html',
  styleUrls: ['./httpgetdata.component.css']
})
export class HttpgetdataComponent implements OnInit {
  public users:IOrg[];
  //users;

  constructor(private getservices:GetservicesService) { 
    this.getUsers();

  }
  getUsers(){
    this.getservices.data().subscribe(
      res=>{
      this.users = res['orgs'];
      console.log(this.users);
      
      }
    )
  }
 
  ngOnInit() {
  }

}
