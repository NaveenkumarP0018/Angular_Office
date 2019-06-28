import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CreateComponent } from './create/create.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


export interface User {
  name: string;
  position: number;
  weight: number;
  symbol:string;
}

@Component({
  selector: 'app-matcard',
  templateUrl: './matcard.component.html',
  styleUrls: ['./matcard.component.css']
})
export class MatcardComponent implements OnInit {
  // user:any;
  users:User[];
  constructor(private dataService:DataService,private dialog: MatDialog) {
    this.getDetails();

   }

   getDetails(){
     this.dataService.getData().subscribe((users: User[])=>{
       this.users=users;
       //console.log(users);
     })
   }

  ngOnInit() {
  }
  //create the new data
  openDialogCreate(){
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '390px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result!=undefined){
      console.log(result);
      this.users.push(result);
      }
    });

  }
  //update row
  openDialogEdit(user) {  
    //console.log('user=>',user);   
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('result=>',result); 
      if(result!=undefined){     
      this.users.forEach(x=>{    
        if(x.name==result.name){
          x.name=result.name;
          x.position=result.position;
          x.symbol=result.symbol;
          x.weight=result.weight;
        }
      
      }); 
    }
});
  }
  openDialogDetails(users){
    //alert("this is u r details")
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '390px',
      data:users
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result!=undefined){
      console.log(result);
      this.users=result;
      }
    });
  }

}

