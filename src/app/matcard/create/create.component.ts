import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  login:FormGroup;


  constructor(    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) {
      this.login=this.fb.group({
        position:[null,[Validators.required,Validators.pattern('^[0-9]+$')]],
        name:[null,[Validators.required,Validators.pattern('^[a-zA-Z-]+$'),Validators.minLength(4)]],
        weight:[null,[Validators.required,Validators.pattern('^[0-9]+$')]],
        symbol:[null,[Validators.required,Validators.pattern('^[A-Z]'),Validators.maxLength(1)]]
      });
     }

     onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
