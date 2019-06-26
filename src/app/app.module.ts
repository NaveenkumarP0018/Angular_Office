import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { TreeComponent } from './tree/tree.component';
import { SelectiontableComponent } from './selectiontable/selectiontable.component';
import { BasicComponent } from './basic/basic.component';
import { CurdoperationsComponent } from './curdoperations/curdoperations.component';
import { HttpTableComponent } from './http-table/http-table.component';
import { AdhardropdownComponent } from './adhardropdown/adhardropdown.component';
import { MatcardComponent } from './matcard/matcard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateComponent } from './matcard/create/create.component';
import { EditComponent } from './matcard/edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsComponent } from './matcard/details/details.component';
import { HttpgetdataComponent } from './httpgetdata/httpgetdata.component';
import { ApicallsComponent } from './apicalls/apicalls.component';
 
const routes=[
  {path:'login',component:LoginComponent},
  {path:'dropdown',component:DropdownComponent},
  {path:'expansion',component:ExpansionComponent},
  {path:'tree',component:TreeComponent},
  {path:'selection',component:SelectiontableComponent},
  {path:'form',component:BasicComponent},
  {path:'curd',component:CurdoperationsComponent},
  {path:'http',component:HttpTableComponent},
  {path:'adhar',component:AdhardropdownComponent},
  {path:'card',component:MatcardComponent},
  {path:'httpGetcall',component:HttpgetdataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DropdownComponent,
    ExpansionComponent,
    TreeComponent,
    SelectiontableComponent,
    BasicComponent,
    CurdoperationsComponent,
    HttpTableComponent,
    AdhardropdownComponent,
    MatcardComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    HttpgetdataComponent,
    ApicallsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,      
    FormsModule,
    CommonModule,HttpClientModule,MatDialogModule,
    RouterModule.forRoot(routes), ],
    entryComponents:[
      CreateComponent,
      EditComponent,
      DetailsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
