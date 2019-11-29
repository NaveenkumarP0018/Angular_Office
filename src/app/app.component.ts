import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleproject';
  OTP = '';
  enterOtp = "";
  subscription: Subscription;
  ngOnInit() {
    this.generateOtp()
    const source = interval(5000); 
    this.subscription = source.subscribe(val => this.generateOtp());
  }
  generateOtp() {
    this.OTP='';
    var digits = '0123456789';
    for (let i = 0; i < 4; i++) {
      this.OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log("otp", this.OTP);
    // const source = interval(1000); 
    // this.subscription = source.subscribe(val => this.OTP);
  }
  compare() {
    if (this.OTP == this.enterOtp) {
      console.log("equal");
      this.showAlert("equals",'success');
    }else{
      this.showAlert("notEquals",'danger')
    }
    this.generateOtp();
  }
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
  showAlert(message,className) {
    var div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    var form = document.getElementById('.container');
    document.body.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
}
