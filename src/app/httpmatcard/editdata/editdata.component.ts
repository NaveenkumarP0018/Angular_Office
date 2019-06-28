import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditComponent } from 'src/app/matcard/edit/edit.component';
import { Users1 } from '../httpmatcard.component';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users1, private fb: FormBuilder) {
      
     //console.log('data=>',data);
    this.editForm = this.fb.group({
      interfaceCode: ['', Validators.required],
      interfaceDesc: ['', Validators.required],
      interfaceId: ['', Validators.required],
      interfaceName: ['', Validators.required],
      status: ['', Validators.required]
    });
    if(data)
    {
      this.editForm.patchValue(data);
      console.log(data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
     
  }

  ngOnInit() {
  }

}