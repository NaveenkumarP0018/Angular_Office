import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  options: any = ['India', 'Us', 'Uk'];
  qualifications: any = ['Degree', 'B.Tech', 'M.Tech', 'MSC'];
  
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength]],
      country: ['', Validators.required],
      qualification: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {}
  // CheckBox Validation
  game:any;
  movie: any;
  hobby1(event){
    if(event.checked){
      this.game = 'Playing Games';
    }else {
      this.game = false;
    }
  }
  hobby2(event){
    if(event.checked){
      this.movie = 'Watching Movies';
    }else {
      this.movie = false;
    }
  }

  // Get all Details
  email: any;
  name: any;
  fatherName: any;
  motherName: any;
  address: any;
  gender: any;
  mobile: any;
  country: any;
  qualification: any;
  date: any;
  // When you submitting form Get the Details
  registerData(){
    console.log('Form Sumiited ');
    this.email      = this.registerForm.value.email;
    this.name       = this.registerForm.value.name;
    this.fatherName = this.registerForm.value.fatherName;
    this.motherName = this.registerForm.value.motherName;
    this.address    = this.registerForm.value.address;
    this.gender     = this.registerForm.value.gender;
    this.country    = this.registerForm.value.country;
    this.qualification = this.registerForm.value.qualification;
    this.date       = this.registerForm.value.date;
    this.mobile     = this.registerForm.value.mobile;
    this.game = 'Playing Games';
    this.movie = 'Watching Movies';

    this.registerForm.reset();
  }
}
