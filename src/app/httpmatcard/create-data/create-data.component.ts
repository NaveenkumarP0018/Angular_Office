import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComponent } from 'src/app/matcard/create/create.component';
import { GetservicesService } from 'src/app/services/getservices.service';

export interface RootObject {
  interfaceCode: string;
  interfaceDesc: string;
  interfaceName: string;
}

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  login:FormGroup;


createData:RootObject;
  constructor(    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private postservice:GetservicesService) {
      this.login=this.fb.group({
        interfaceCode:[null,Validators.required],
        interfaceDesc:[null,[Validators.required,Validators.minLength(4)]],
        interfaceName:[null,Validators.required],
      });
     }

     onNoClick(): void {
      this.dialogRef.close();
    }
    getpostdata(){
      this.createData={
        interfaceCode: this.login.value.interfaceCode,
        interfaceDesc: this.login.value.interfaceDesc,
        interfaceName: this.login.value.interfaceName
      }
      console.log("createData==>",this.createData);
      this.postservice.postdata(this.createData).subscribe(
        res=>{
          if(res){
            this.dialogRef.close(this.createData);
          }
        }
      )
    }
  ngOnInit() {
  }

}
