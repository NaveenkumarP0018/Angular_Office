import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../matcard.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, private fb: FormBuilder) {
      
    // console.log('data=>',data);
    this.editForm = this.fb.group({
      position: ['', Validators.required],
      name: ['', Validators.required],
      weight: ['', Validators.required],
      symbol: ['', Validators.required],
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