import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-multiplecheckbox',
  templateUrl: './multiplecheckbox.component.html',
  styleUrls: ['./multiplecheckbox.component.css']
})
export class MultiplecheckboxComponent implements OnInit {

  myForm: FormGroup;
  datas=['1','2','3'];
 
 
 constructor(private fb: FormBuilder) { }

 ngOnInit() {
  this.myForm = this.fb.group({
  email: '',
  phones: this.fb.array([])
 })
 
 }
 
 get phoneForms() {
  return this.myForm.get('phones') as FormArray
 }
 
//  addPhone() {
 
//   const phone = this.fb.group({ 
//   area: [],
//   prefix: [],
//   line: [],
//   })

//   this.phoneForms.push(phone);
//  }

addPhone(){
  const phone = this.fb.group({
    area:[],
    prefix:[],
    line:[]
  })
  
  this.phoneForms.push(phone);
  
}
 

}