import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Enducation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent {
  educations: Enducation[] = [
    {value: 'mca', viewValue: 'MCA'},
    {value: 'btech', viewValue: 'B.Tech'},
    {value: 'degree', viewValue: 'Degree'}
  ];

  hide = true;
  misMatch: boolean = false;
  registerForm: FormGroup;
  registerForm1:FormGroup;
  registerForm2:FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      name:        ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      pass:        ['', Validators.required],
      confirmPass: ['', Validators.required],
      mobile:      ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    })
    this.registerForm1=this.fb.group({
      address:     ['', [Validators.required, Validators.minLength(20)]],
      gender :     ['', Validators.required],
      education:   ['', Validators.required],
      game: [''],
      movie: ['']
    })
    this.registerForm2=this.fb.group({   
      dob:['', Validators.required]
    })  
  }

  checkPassword(){
    let password = this.registerForm.value.pass;
    let confirmPassword = this.registerForm.value.confirmPass;

    // console.log(password + '<-->' + confirmPassword);
    // return password === confirmPassword ? this.misMatch=false : this.misMatch = true;
  }
  
  Name : string;
  Email: string;
  Pass : any;
  Mobile: number;
  Address: string;
  Gender: string;
  DOB: number;
  GAME: string;
  MOVIE: string;
  MCA : string;
  BTECH: string;
  DEGREE: string;
  getOptions(value){
    if(value == 'mca'){
      this.MCA = value;
    }
    if(value == 'btech'){
      this.BTECH = value;
    }
    if(value == 'degree'){
      this.DEGREE = value;
    }
  }
  onSubmit(){
    var formValue = this.registerForm.value;
    this.Name  = formValue.name;
    this.Email = formValue.email;
    this.Pass  = formValue.pass;
    this.Mobile=formValue.mobile;
    var formValue1=this.registerForm1.value;
    this.DEGREE=this.registerForm1.value;
    this.Address = formValue1.address;
    this.Gender  = formValue1.gender;
    this.GAME  = formValue1.game;
    this.MOVIE  = formValue1.movie;
    var formValue2=this.registerForm2.value;
    this.DOB = formValue2.dob;

    console.log(this.Name, this.Email, this.Pass, this.Mobile, this.Address, this.Gender, this.DOB, this.GAME, this.MOVIE)

    if(this.MCA == 'mca'){
      console.log(this.MCA);
    }else if(this.BTECH == 'btech'){
      console.log(this.BTECH);
    }else if(this.DEGREE == 'degree'){
      console.log(this.DEGREE);
    }
    
  }



getdata(){
  console.log(this.registerForm);
  console.log(this.registerForm1);
  console.log(this.registerForm2);
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