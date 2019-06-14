import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DemoMaterialModule } from './material';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { BtnsIndicatorsComponent } from './btns-indicators/btns-indicators.component';
import { ModalsComponent } from './modals/modals.component';
import { BottomSheetComponent } from './modals/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './modals/dialog/dialog.component';
import { DialogInstallComponent } from './modals/dialog-install/dialog-install.component';
import { DataTablesComponent } from './data-tables/data-tables.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'btnIndicator', component: BtnsIndicatorsComponent},
  {path: 'modals', component: ModalsComponent},
  {path: 'dataTables', component: DataTablesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    BtnsIndicatorsComponent,
    ModalsComponent,
    BottomSheetComponent,
    DialogComponent,
    DialogInstallComponent,
    DataTablesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetComponent, DialogComponent, DialogInstallComponent, DataTablesComponent]
})
export class AppModule { }
