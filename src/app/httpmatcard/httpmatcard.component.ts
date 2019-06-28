import { Component, OnInit, ViewChild } from '@angular/core';
import { GetservicesService } from '../services/getservices.service';
import { CreateDataComponent } from './create-data/create-data.component';
import { MatDialog } from '@angular/material/dialog';
import { EditdataComponent } from './editdata/editdata.component';

export interface Users1 {
  interfaceCode: string;
  interfaceDesc: string;
  interfaceId: number;
  interfaceName: string;
  status: number;
}
@Component({
  selector: 'app-httpmatcard',
  templateUrl: './httpmatcard.component.html',
  styleUrls: ['./httpmatcard.component.css']
})
export class HttpmatcardComponent implements OnInit {
  users;



  constructor(private service:GetservicesService,private dialog: MatDialog) {
    this.getdetails();
   }
  getdetails(){
    this.service.interfacedetails().subscribe(
      res=>{
        this.users = res['interfaceInfo'];
        console.log(this.users);
      }
    )
  }
  openDialogCreate(){
    const dialogRef = this.dialog.open(CreateDataComponent, {
      width: '390px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result!=undefined){
        this.getdetails();
      }
    });

  }
  openDialogEdit(user){
    //alert("iam going to update u")
    const dialogRef = this.dialog.open(EditdataComponent,{
      width:'400px',
      data:user
    });
    //console.log("naveennnnnnnnnn",this.users);
    
    dialogRef.afterClosed().subscribe(result=>{
      if(result!=undefined){
        this.users.forEach(x=>{
          if(x.interfaceName==result.interfaceName){
            x.interfaceName=result.interfaceName;
            x.interfaceCode=result.interfaceCode;
            x.interfaceDesc=result.interfaceDesc;
            x.interfaceId=result.interfaceId;
            x.status=result.status;
          }
        })
      } 
    })
  }
  ngOnInit() {
  }
   }
  


