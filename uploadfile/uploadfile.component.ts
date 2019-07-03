import { Component } from '@angular/core';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent { 
  arrayBuffer:any;
  file:File;

  openFile(event) {
    let input = event.target;    
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();        
        reader.onload = () => {
          // this 'text' is the content of the file
          var output = reader.result;
          console.log(output);    
        }
        reader.readAsText(input.files[index]);
    };
  }

  incomingfile(event){
    this.file= event.target.files[0]; 
  }
  
  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      console.log(worksheet);
              
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  // myForm: FormGroup;
  // datas=["1","2","3"];
  
  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     email: '',
  //     phones: this.fb.array([])
  //   })

  // }

  // get phoneForms() {
  //   return this.myForm.get('phones') as FormArray
  // }

  // addPhone(i) {

  //   const phone = this.fb.group({ 
  //     area: [],
  //     prefix: [],
  //     line: [],
  //   })
  //   this.phoneForms.push(phone);
  //   if(i.checked){
  //   this.phoneForms.removeAt(i);
  //   }
  // }
  

  // deletePhone(i) {
  //   this.phoneForms.removeAt(i)
  // }
}