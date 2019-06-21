import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  hide=true;
  qualification: any = ['Degree', 'B.Tech', 'M.Tech', 'MSC'];
  constructor(private fb:FormBuilder){
    this.loginform=this.fb.group({
      name:['',[Validators.required,Validators.pattern("/[A-Z]/")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength]],
      qualification:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      State:['',Validators.required],
      postal:['',Validators.required]
    })
  }
  ngOnInit() {
  }

  name:any;
  email:any;
  password:any;
  qualifications:any;
  city:any;
  state:any;
  postal:any;
  getdata(){
    console.log(this.loginform.value);
    
    this.name=this.loginform.value.name;
    this.email=this.loginform.value.email;
    this.password=this.loginform.value.password;
    this.qualifications=this.loginform.value.qualification;
    this.city=this.loginform.value.city;
    this.postal=this.loginform.value.postal;
  } 
}
