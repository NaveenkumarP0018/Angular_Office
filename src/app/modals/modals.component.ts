import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogInstallComponent } from './dialog-install/dialog-install.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent  {
  cricket: string;
  name: string;
  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog, private _snackBar: MatSnackBar) { }
  
  // Bottom Sheet
  openBottomSheet(){
    this.bottomSheet.open(BottomSheetComponent);
  }
  
  // Open a Dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, cricket: this.cricket}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cricket = result;
    });
  }

  // Opean a Install Dialog
  openInstallDialog() {
    const dialogRef = this.dialog.open(DialogInstallComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Open a Snack Bar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // ToolTips 
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
