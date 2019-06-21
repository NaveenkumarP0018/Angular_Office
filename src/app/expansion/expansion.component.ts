import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent {
  loginForm:FormGroup;
  hide=true;

  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      name:[null,[Validators.required,Validators.pattern('^[A-Z-]+$')]],
      secondName:[null,[Validators.required,Validators.pattern('^[A-Z-]+$')]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    })
  }



  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}